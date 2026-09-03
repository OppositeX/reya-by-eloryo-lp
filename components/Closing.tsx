'use client';

import Image from 'next/image';

const LINES = ['Your Cyprus Home.', 'A life worth', 'returning to.'];

/**
 * Both layers MUST lay out identically -- the bright copy is wiped in on top of
 * the dim copy, so any difference in font, weight or wrapping shows up as the
 * white text sitting off the letters underneath.
 *
 * font-family and font-weight are set explicitly rather than inherited: the
 * global `body,p,span,...{font-family:var(--font-body)}` rule in globals.css
 * beats inheritance from the parent <p>, and `span:not(.font-display)` would
 * otherwise force weight 200.
 */
const lineSpan = {
  display: 'block',
  whiteSpace: 'nowrap' as const,
  fontFamily: 'var(--font-display)',
  fontWeight: 'var(--weight-regular)' as unknown as number,
};

/**
 * Closing statement. The bright copy sits over a dim copy and is wiped in
 * left-to-right by ScrollEffects (see useScrollEffects), which animates the
 * clip-path on each `[data-closefill] > span`.
 */
export default function Closing({ onInquire }: { onInquire: () => void }) {
  const lineStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.6rem,6vw,5.5rem)',
    lineHeight: 1.08,
    color: 'var(--reya-cream)',
    margin: 0,
    textTransform: 'uppercase' as const,
  };

  return (
    <section
      className="reya-closing"
      style={{
        position: 'relative',
        background: '#ad9573',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1em',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/uploads/closing-motif.webp"
        alt=""
        width={1920}
        height={1080}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
          mixBlendMode: 'multiply',
          opacity: 0.42,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 34 }}>
        <div style={{ position: 'relative' }}>
          <p style={{ ...lineStyle, opacity: 0.25 }}>
            {LINES.map((l) => (
              <span key={l} style={lineSpan}>
                {l}
              </span>
            ))}
          </p>
          <p data-closefill="" aria-hidden="true" style={{ ...lineStyle, position: 'absolute', inset: 0 }}>
            {LINES.map((l) => (
              <span key={l} style={{ ...lineSpan, clipPath: 'inset(0 100% 0 0)' }}>
                {l}
              </span>
            ))}
          </p>
        </div>
        <button
          type="button"
          onClick={onInquire}
          className="reya-cta reya-cta--outline reya-close-cta"
          style={{ fontSize: 'var(--text-body-lg)', fontWeight: 300, padding: '16px 38px', borderColor: 'rgba(239,234,225,0.6)' }}
        >
          Speak to the Sales Team
        </button>
      </div>
    </section>
  );
}
