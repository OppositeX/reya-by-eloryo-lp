'use client';

import { useEffect, useState } from 'react';
import { salesSuite } from '@/lib/content';
import { Button, CloseIcon } from './ui';
import Portal from './Portal';

type Form = { fullName: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

const EMPTY: Form = { fullName: '', email: '', phone: '', message: '' };

function validate(f: Form): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = 'Please enter your name.';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = 'Enter a valid email address.';
  if (!f.phone.trim()) e.phone = 'Please enter a phone number.';
  return e;
}

export default function InquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const field = (name: keyof Form) => ({
    name,
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [name]: e.target.value }));
      setErrors((x) => ({ ...x, [name]: undefined }));
    },
    placeholder: ' ',
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate(form);
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setSubmitting(true);
    setFailed(null);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch {
      setFailed('We could not send that just now. Please try again, or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  function closeAndReset() {
    setForm(EMPTY);
    setErrors({});
    setSubmitted(false);
    setFailed(null);
    onClose();
  }

  return (
    <Portal>
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request your private visit"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 310,
        background: 'rgba(28,20,16,0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px,3vw,40px)',
        animation: 'reyaOverlay .3s var(--ease-standard) both',
      }}
    >
      <section
        id="inquire"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: '#ad9573',
          width: '100%',
          maxWidth: 1440,
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: 'clamp(28px,4vw,60px)',
          animation: 'reyaPop .4s var(--ease-standard) both',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="reya-iconbtn"
          style={{ position: 'absolute', top: 18, right: 18, zIndex: 6, color: 'var(--reya-cream)' }}
        >
          <CloseIcon />
        </button>

        <div
          style={{
            position: 'relative',
            width: '100%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))',
            gap: 'clamp(32px,4vw,72px)',
            alignItems: 'stretch',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 200,
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--reya-cream)',
                opacity: 0.85,
              }}
            >
              Pre-Sales Open
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.1rem,3.9vw,3.3rem)',
                lineHeight: 1.12,
                color: 'var(--reya-cream)',
                margin: 0,
              }}
            >
              Join us for coffee at our newly built sales suite
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-lg)',
                lineHeight: 1.7,
                color: 'var(--reya-cream)',
                opacity: 0.92,
                margin: 0,
                maxWidth: '48ch',
              }}
            >
              Book your personal tour of our site and Pervolia to experience the village and coast
              first hand, with full access to view and walk through the development using our in
              house platform.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 34, maxWidth: 520 }}>
              {salesSuite.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 16,
                    padding: '16px 0',
                    borderTop: '1px solid rgba(243,236,225,0.3)',
                    borderBottom:
                      i === salesSuite.length - 1 ? '1px solid rgba(243,236,225,0.3)' : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 200,
                      fontSize: 'var(--text-eyebrow)',
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                      color: 'var(--reya-cream)',
                      opacity: 0.7,
                    }}
                  >
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="reya-underline"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 200,
                        fontSize: 'var(--text-body)',
                        color: 'var(--reya-cream)',
                        textAlign: 'right',
                      }}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 200,
                        fontSize: 'var(--text-body)',
                        color: 'var(--reya-cream)',
                        textAlign: 'right',
                      }}
                    >
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={submit}
            noValidate
            className="reya-inquiry"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'color-mix(in oklab, #ad9573 78%, var(--reya-earth-brown))',
              padding: 'clamp(30px,3.4vw,52px)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 24px',
              alignContent: 'start',
              width: '100%',
            }}
          >
            <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
              <span
                className="font-display"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem,2.2vw,2rem)',
                  color: 'var(--reya-cream)',
                  textTransform: 'uppercase',
                }}
              >
                Request your private visit
              </span>
            </div>

            <div className={`reya-field${errors.fullName ? ' reya-field--error' : ''}`} style={{ gridColumn: '1/-1' }}>
              <input type="text" autoComplete="name" required aria-invalid={!!errors.fullName} {...field('fullName')} />
              <label>Full name</label>
              {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
            </div>

            <div className={`reya-field${errors.email ? ' reya-field--error' : ''}`} style={{ gridColumn: '1/-1' }}>
              <input type="email" autoComplete="email" required aria-invalid={!!errors.email} {...field('email')} />
              <label>Email address</label>
              {errors.email && <FieldError>{errors.email}</FieldError>}
            </div>

            <div className={`reya-field${errors.phone ? ' reya-field--error' : ''}`} style={{ gridColumn: '1/-1' }}>
              <input type="tel" autoComplete="tel" required aria-invalid={!!errors.phone} {...field('phone')} />
              <label>Phone number</label>
              {errors.phone && <FieldError>{errors.phone}</FieldError>}
            </div>

            <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
              <Button type="submit" variant="primary" disabled={submitting}>
                {submitting ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        border: '2px solid oklch(from var(--reya-earth-brown) l c h / 0.3)',
                        borderTopColor: 'var(--reya-earth-brown)',
                        borderRadius: '50%',
                        animation: 'reyaSpin .7s linear infinite',
                      }}
                    />
                    Sending…
                  </span>
                ) : (
                  'Submit Enquiry'
                )}
              </Button>
              {failed && (
                <span role="alert" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--reya-cream)', textAlign: 'center' }}>
                  {failed}
                </span>
              )}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 200,
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: 'rgba(243,236,225,0.75)',
                  textAlign: 'center',
                }}
              >
                Your details are held in confidence.
              </span>
            </div>
          </form>
        </div>

        {submitted && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 5,
              background: 'var(--color-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4em',
              animation: 'reyaOverlay .4s var(--ease-standard) both',
            }}
          >
            <div
              style={{
                maxWidth: 560,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 22,
                animation: 'reyaPop .5s var(--ease-standard) both',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'oklch(from var(--reya-olive-grove) l c h / 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--reya-olive-grove)" strokeWidth="1.5">
                  <path d="M4 12.5l5 5 11-12" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem,4vw,2.5rem)',
                  lineHeight: 1.1,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                Thank you.
                <br />
                Your request is received.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body-lg)',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                }}
              >
                An Eloryo advisor will contact you within two hours to arrange your visit to the
                sales suite in Perivolia.
              </p>
              <Button onClick={closeAndReset}>Back to the page</Button>
            </div>
          </div>
        )}
      </section>
    </div>
    </Portal>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--reya-cream)',
        opacity: 0.85,
        marginTop: 6,
      }}
    >
      {children}
    </span>
  );
}
