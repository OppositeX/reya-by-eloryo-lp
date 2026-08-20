import { NextResponse } from 'next/server';

/**
 * Sales enquiry endpoint.
 *
 * Validates server-side (never trust the client form) and then delivers the
 * lead. Delivery is intentionally pluggable: set RESEND_API_KEY + INQUIRY_TO
 * to email it, or swap `deliver()` for a CRM call. With neither configured the
 * lead is logged and the request still succeeds, so the form works in dev.
 */

export const runtime = 'nodejs';

type Payload = { fullName: string; email: string; phone: string; message?: string };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAX = 4000;

function clean(v: unknown): string {
  return typeof v === 'string' ? v.trim().slice(0, MAX) : '';
}

function validate(body: Record<string, unknown>): { data?: Payload; errors?: string[] } {
  const fullName = clean(body.fullName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const message = clean(body.message);

  const errors: string[] = [];
  if (!fullName) errors.push('fullName is required');
  if (!EMAIL_RE.test(email)) errors.push('a valid email is required');
  if (!phone) errors.push('phone is required');

  return errors.length ? { errors } : { data: { fullName, email, phone, message } };
}

async function deliver(lead: Payload) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;

  if (!key || !to) {
    // No provider wired up yet. Keep the lead in the logs rather than dropping
    // it silently, and let the caller succeed so the UI still works.
    console.info('[inquiry] no delivery configured; lead:', lead);
    return;
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM ?? 'Reya <onboarding@resend.dev>',
      to: [to],
      reply_to: lead.email,
      subject: `Reya enquiry — ${lead.fullName}`,
      text: [
        `Name:  ${lead.fullName}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        '',
        lead.message || '(no message)',
      ].join('\n'),
    }),
  });

  if (!res.ok) {
    throw new Error(`Email provider returned ${res.status}`);
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { data, errors } = validate(body);
  if (!data) {
    return NextResponse.json({ error: 'Validation failed.', errors }, { status: 422 });
  }

  try {
    await deliver(data);
  } catch (err) {
    console.error('[inquiry] delivery failed:', err);
    return NextResponse.json({ error: 'Could not deliver the enquiry.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
