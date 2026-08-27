import { NextResponse } from 'next/server';
import { enquirerConfirmation, leadNotification, type Lead } from '@/lib/emails';

/**
 * Sales enquiry endpoint.
 *
 * Validates server-side (never trust the client form), then delivers the lead
 * through Resend: a notification to INQUIRY_TO that replies straight back to
 * the enquirer, plus a confirmation to the enquirer themselves.
 *
 * Without RESEND_API_KEY / INQUIRY_TO the lead is logged and the request still
 * succeeds, so the form works in local development. In production that config
 * is required — a missing key there fails loudly rather than dropping leads.
 */

export const runtime = 'nodejs';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_FROM = 'Reya <noreply@reya.cy>';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAX = 4000;

function clean(v: unknown): string {
  return typeof v === 'string' ? v.trim().slice(0, MAX) : '';
}

function validate(body: Record<string, unknown>): { data?: Lead; errors?: string[] } {
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

type Message = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

async function send(key: string, from: string, msg: Message) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [msg.to],
      reply_to: msg.replyTo,
      subject: msg.subject,
      text: msg.text,
      html: msg.html,
    }),
  });

  if (!res.ok) {
    // Resend returns a JSON body describing the failure (unverified domain,
    // bad key, invalid recipient); surface it in the logs, not to the client.
    throw new Error(`Resend returned ${res.status}: ${await res.text()}`);
  }
}

async function deliver(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  const from = process.env.INQUIRY_FROM ?? DEFAULT_FROM;

  if (!key || !to) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('RESEND_API_KEY and INQUIRY_TO must be set in production.');
    }
    console.info('[inquiry] no delivery configured; lead:', lead);
    return;
  }

  // The team notification is the one that must land — await it and let a
  // failure surface as a 502 so the visitor is told to try again.
  const notification = leadNotification(lead);
  await send(key, from, { to, replyTo: lead.email, ...notification });

  // The confirmation is a courtesy. The lead is already captured, so a failure
  // here is logged and swallowed rather than shown as a failed submission.
  try {
    const confirmation = enquirerConfirmation(lead);
    await send(key, from, { to: lead.email, replyTo: to, ...confirmation });
  } catch (err) {
    console.error('[inquiry] confirmation email failed:', err);
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
