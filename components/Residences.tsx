'use client';

import { useState } from 'react';
import Image from 'next/image';
import { residenceTabs, residences } from '@/lib/content';
import { Button, ChevronLeft, ChevronRight, CloseIcon } from './ui';
import Portal from './Portal';

/** Thin-line marks for the three elements, drawn to match the tab text color. */
function ElementIcon({ element }: { element: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  if (element === 'Air') {
    return (
      <svg {...common}>
        <path d="M3 8.5h9.5a2.4 2.4 0 1 0-2.4-2.4" />
        <path d="M3 12.5h13.8a2.7 2.7 0 1 1-2.7 2.7" />
        <path d="M3 16.5h6.5a2 2 0 1 1-2 2" />
      </svg>
    );
  }
  if (element === 'Earth') {
    return (
      <svg {...common}>
        <path d="M12 4.5c4.6 0 7.8 2.7 7.8 6.3 0 3.9-3.4 8.7-7.8 8.7s-8-3.6-8-7.5c0-4.2 3.4-7.5 8-7.5Z" />
        <path d="M12.2 7.8c2.7 0 4.6 1.5 4.6 3.4 0 2.3-2 5-4.7 5s-4.6-2-4.6-4.3c0-2.4 2-4.1 4.7-4.1Z" />
        <path d="M12.3 11c1 0 1.7.5 1.7 1.2 0 .9-.8 1.8-1.8 1.8s-1.6-.7-1.6-1.5c0-.9.7-1.5 1.7-1.5Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3.6" />
      <path d="M12 3.2v2.2M12 18.6v2.2M3.2 12h2.2M18.6 12h2.2M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5" />
    </svg>
  );
}

export default function Residences({ onInquire }: { onInquire: () => void }) {
  const [active, setActive] = useState(0);
  // One carousel position per residence, so switching tabs keeps your place.
  const [shot, setShot] = useState<number[]>(() => residences.map(() => 0));
  const [floorOpen, setFloorOpen] = useState(false);

  const res = residences[active];
  const step = (dir: number) =>
    setShot((prev) => {
      const next = [...prev];
      const n = residences[active].gallery.length;
      next[active] = (next[active] + dir + n) % n;
      return next;
    });

  return (
    <div
      id="villas"
      style={{
        scrollMarginTop: 96,
        width: 'calc(100% + 8em)',
        margin: '0 -4em',
        padding: 'clamp(48px,5.5vw,72px) 4em',
      }}
    >
      <div
        data-villas-el=""
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: 860,
          marginBottom: 'clamp(18px,2.5vw,26px)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-primary)',
          }}
        >
          Contemporary, easy living.
        </span>
        <h3
          className="reya-res-h3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem,4.2vw,3.9rem)',
            lineHeight: 1.08,
            color: 'var(--color-text-primary)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Seven typologies<span className="reya-res-dot"> • </span>
          <span className="reya-res-brk"> </span>Three elements
          <span className="reya-res-dot"> • </span>
          <span className="reya-res-brk"> </span>One address.
        </h3>
        <p
          className="reya-mbr reya-resintro"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: 'none',
          }}
        >
          Designed around how you actually want to spend a day.
          <br />
          Morning coffee with the veranda doors pushed back, the breeze through the open plan living
          space and afternoons soaking up the rays on your lounger, with nowhere else to be.
        </p>
      </div>

      <div
        data-villas-el=""
        className="reya-res-tabs"
        role="tablist"
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 26,
          flexWrap: 'nowrap',
        }}
      >
        {residenceTabs.map((label, i) => (
          <button
            key={label}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`reya-res-tab${i === active ? ' reya-res-tab--active' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: i === active ? 500 : 300,
              fontSize: 'var(--text-body)',
              background: i === active ? 'var(--color-accent-primary)' : 'transparent',
              border: `1px solid ${i === active ? 'var(--color-accent-primary)' : 'var(--color-border-strong)'}`,
              borderRadius: 'var(--radius)',
              color: i === active ? 'var(--reya-cream)' : 'var(--color-text-secondary)',
              padding: '13px 22px',
              cursor: 'pointer',
              transition: 'color 80ms, border-color 80ms, background 80ms, box-shadow 80ms',
            }}
          >
            <ElementIcon element={label.split(' · ')[0]} />
            <span className="reya-tab-lbl" style={{ whiteSpace: 'nowrap' }}>
              <span style={{ fontWeight: 600 }}>{label.split(' · ')[0]}</span>
              <span className="reya-tab-sep"> · </span>
              <span>{label.split(' · ')[1]}</span>
            </span>
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        <div
          className="reya-villas-img"
          style={{
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            aspectRatio: '3/1.8',
            maxHeight: 'min(50vh, 576px)',
            minHeight: 'min(288px, 54vw)',
            width: '100%',
            background: 'var(--color-surface-sunken)',
          }}
        >
          {residences.map((r, ri) =>
            r.gallery.map((src, gi) => (
              <Image
                key={src}
                src={src}
                alt={`Rendering — ${r.tagline}`}
                fill
                sizes="(max-width: 880px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  opacity: ri === active && gi === shot[ri] ? 1 : 0,
                  zIndex: ri === active && gi === shot[ri] ? 2 : 1,
                  pointerEvents: 'none',
                  transition: 'opacity .6s var(--ease-standard)',
                }}
              />
            )),
          )}
          <button
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="reya-galarrow-sm"
            style={{ left: 14 }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Next image"
            className="reya-galarrow-sm"
            style={{ right: 14 }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div data-villas-info="" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 200,
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-secondary)',
            }}
          >
            {res.tagline}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem,3.6vw,2.5rem)',
              lineHeight: 1.1,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {res.name}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {res.types.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.5,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
              gap: '16px 28px',
              borderTop: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              padding: '16px 0',
              marginTop: 2,
            }}
          >
            {[
              [res.area, 'sqm'],
              [res.beds, 'Bedrooms'],
              [res.baths, 'Bathrooms'],
              [res.deed, 'Title Deed'],
            ].map(([value, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '1.6rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)',
                    letterSpacing: '.02em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="reya-res-cta"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 'var(--text-body-lg)',
                  color: 'var(--reya-earth-brown)',
                }}
              >
                {res.price}
              </span>
            </div>
            <div style={{ flex: 1 }} />
            <Button onClick={() => setFloorOpen(true)}>View Floorplan</Button>
            <button type="button" onClick={onInquire} className="reya-cta reya-cta--solid" style={{ fontSize: 'var(--text-body)', padding: '13px 26px' }}>
              Request Pricing
            </button>
          </div>
        </div>
      </div>

      {floorOpen && (
        <Portal>
        <div
          onClick={() => setFloorOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'var(--color-overlay)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px,4vw,48px)',
            animation: 'reyaOverlay .3s var(--ease-standard) both',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 820,
              background: 'var(--color-bg)',
              borderRadius: 'var(--radius)',
              padding: 'clamp(20px,3vw,36px)',
              animation: 'reyaPop .4s var(--ease-standard) both',
            }}
          >
            <button
              onClick={() => setFloorOpen(false)}
              aria-label="Close"
              className="reya-iconbtn"
              style={{ position: 'absolute', top: 16, right: 16, color: 'var(--color-text-primary)' }}
            >
              <CloseIcon size={24} />
            </button>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-primary)',
              }}
            >
              Floorplan
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem,3.4vw,2.25rem)',
                color: 'var(--color-text-primary)',
                margin: '6px 0 20px',
              }}
            >
              {res.name}
            </h3>
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/10',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Floorplan artwork has not been supplied yet; the export shipped
                  an empty design-tool image slot here too. */}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body-sm)',
                  color: 'var(--color-text-muted)',
                  textAlign: 'center',
                  padding: 24,
                }}
              >
                Floorplan for {res.tagline} — available in the sales suite.
              </span>
            </div>
          </div>
        </div>
</Portal>
            )}
    </div>
  );
}
