/**
 * Email bodies for the sales enquiry flow (app/api/inquiry/route.ts).
 *
 * Mail clients strip <style> blocks and never load the Bacley/DM Sans webfonts,
 * so these are table-free, inline-styled, and fall back to Georgia/Helvetica.
 * Colours are the Reya palette hardcoded as hex — CSS variables do not survive
 * an email client either.
 */

export type Lead = { fullName: string; email: string; phone: string; message?: string };

const CREAM = '#F3ECE1';
const BROWN = '#4C382E';
const CLAY = '#A3674B';
const SAND = '#BFAA89';

const DISPLAY = "Georgia, 'Times New Roman', serif";
const BODY = "Helvetica, Arial, sans-serif";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Cream page + centred card the two emails share. */
function shell(inner: string): string {
  return `<div style="margin:0;padding:32px 16px;background:${CREAM};font-family:${BODY};">
  <div style="max-width:560px;margin:0 auto;background:#FFFFFF;padding:40px 36px;">
    <div style="font-family:${DISPLAY};font-size:22px;letter-spacing:.18em;text-transform:uppercase;color:${BROWN};">Reya</div>
    <div style="height:1px;background:${SAND};margin:20px 0 28px;"></div>
    ${inner}
  </div>
  <div style="max-width:560px;margin:18px auto 0;font-family:${BODY};font-size:12px;line-height:1.6;color:${BROWN};opacity:.6;text-align:center;">
    Reya by Eloryo · Pervolia, Larnaca · Cyprus
  </div>
</div>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${SAND};font-family:${BODY};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${BROWN};opacity:.65;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0 10px 20px;border-bottom:1px solid ${SAND};font-family:${BODY};font-size:15px;line-height:1.5;color:${BROWN};">${escapeHtml(value)}</td>
  </tr>`;
}

/** Internal lead notification — what the sales team acts on. */
export function leadNotification(lead: Lead) {
  const text = [
    `New enquiry from the Reya landing page.`,
    '',
    `Name:  ${lead.fullName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    '',
    'Message:',
    lead.message || '(none)',
  ].join('\n');

  const html = shell(`
    <h1 style="margin:0 0 6px;font-family:${DISPLAY};font-size:26px;line-height:1.2;font-weight:normal;color:${BROWN};">New enquiry</h1>
    <p style="margin:0 0 24px;font-family:${BODY};font-size:14px;line-height:1.6;color:${BROWN};opacity:.7;">Submitted through the request-a-visit form.</p>
    <table style="width:100%;border-collapse:collapse;">
      ${row('Name', lead.fullName)}
      ${row('Email', lead.email)}
      ${row('Phone', lead.phone)}
      ${row('Message', lead.message || '—')}
    </table>
    <p style="margin:28px 0 0;font-family:${BODY};font-size:14px;line-height:1.6;color:${BROWN};">
      Reply to this email to reach <a href="mailto:${escapeHtml(lead.email)}" style="color:${CLAY};">${escapeHtml(lead.fullName)}</a> directly.
    </p>`);

  return { subject: `Reya enquiry — ${lead.fullName}`, text, html };
}

/** Confirmation to the enquirer, mirroring the modal's on-screen message. */
export function enquirerConfirmation(lead: Lead) {
  const firstName = lead.fullName.split(/\s+/)[0] || lead.fullName;

  const text = [
    `${firstName},`,
    '',
    'Thank you — your request is received.',
    '',
    'An Eloryo advisor will contact you shortly to arrange your visit to the sales',
    'suite in Pervolia, open daily 10:00 – 17:00.',
    '',
    'Reya by Eloryo · Pervolia, Larnaca · Cyprus',
  ].join('\n');

  const html = shell(`
    <h1 style="margin:0 0 18px;font-family:${DISPLAY};font-size:26px;line-height:1.25;font-weight:normal;color:${BROWN};">Thank you, ${escapeHtml(firstName)}.<br />Your request is received.</h1>
    <p style="margin:0 0 18px;font-family:${BODY};font-size:15px;line-height:1.7;color:${BROWN};">
      An Eloryo advisor will contact you shortly to arrange your visit — a walk through the
      site and the village, with full access to the development on our in-house platform.
    </p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px;">
      ${row('Location', 'Pervolia, Larnaca · Cyprus')}
      ${row('Open', 'Daily, 10:00 – 17:00')}
    </table>
    <p style="margin:26px 0 0;font-family:${BODY};font-size:14px;line-height:1.6;color:${BROWN};opacity:.7;">
      Replying to this email reaches our sales team directly.
    </p>`);

  return { subject: 'Your visit to Reya — request received', text, html };
}
