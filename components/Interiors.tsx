'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { bentoTiles } from '@/lib/content';
import { CloseIcon, TickIcon } from './ui';
import Portal from './Portal';

export default function Interiors({ onInquire }: { onInquire: () => void }) {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <section
      id="interiors"
      data-screen-label="Interiors & Specification"
      style={{
        scrollMarginTop: 96,
        background:
          'linear-gradient(to bottom, #F3ECE1 0%, rgba(243,236,225,0.4) 40%, rgba(243,236,225,0.88) 100%)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(90px,10vw,140px) 4em',
      }}
    >
      <div
        data-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          maxWidth: 640,
          margin: '0 auto clamp(32px,5vw,48px)',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
            lineHeight: 1.08,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          What you receive.
        </h2>
      </div>

      <div className="reya-bento">
        {bentoTiles.map((t) => (
          <div
            key={t.eyebrow}
            className="reya-bento-tile"
            style={{
              gridColumn: t.span ? 'span 2' : t.colSpan ? `span ${t.colSpan}` : undefined,
              gridRow: t.span ? 'span 2' : undefined,
            }}
          >
            <div className="reya-bento-img">
              <Image src={t.img} alt={t.eyebrow} fill sizes="(max-width: 1100px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <button
              className="reya-bento-zoom"
              onClick={() => setZoom({ src: t.img, alt: t.eyebrow })}
              aria-label={`View ${t.eyebrow} image`}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.2" y1="16.2" x2="21" y2="21" />
              </svg>
            </button>
            <div className="reya-bento-cap">
              <span className="reya-bento-eyebrow">{t.eyebrow}</span>
              <h3 className="reya-bento-title">{t.title}</h3>
              <p className="reya-bento-desc">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Outdoor onInquire={onInquire} />

      {zoom && (
        <Portal>
        <div
          onClick={() => setZoom(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 320,
            background: 'rgba(28,20,16,0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(12px,3vw,48px)',
            animation: 'reyaOverlay .3s var(--ease-standard) both',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: 'min(1400px,94vw)',
              maxHeight: '90vh',
              animation: 'reyaPop .35s var(--ease-standard) both',
            }}
          >
            <button
              onClick={() => setZoom(null)}
              aria-label="Close"
              className="reya-iconbtn"
              style={{ position: 'absolute', top: -46, right: 0, color: 'var(--reya-cream)' }}
            >
              <CloseIcon size={28} />
            </button>
            <Image
              src={zoom.src}
              alt={zoom.alt}
              width={1376}
              height={1024}
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '85vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        </Portal>
      )}
    </section>
  );
}

const outdoorCards = [
  {
    num: '01',
    kind: 'Standard',
    img: '/assets/photography/standard-garden-v2.webp',
    alt: 'Private garden and courtyard',
    body: (
      <>
        Covered veranda and private garden come with every residence,
        <br />
        not as an upgrade or optional extra.
        <br />
        Each one is sized for daily use.
      </>
    ),
    tags: ['Covered veranda', 'Private garden'],
  },
  {
    num: '02',
    kind: 'Optional',
    img: '/assets/photography/optional-pool-v3.webp',
    alt: 'Private pool terrace',
    body: (
      <>
        Private pool and pergola are available as additions,
        <br />
        designed within the home’s original architecture,
        <br />
        so the result reads as one considered whole, not an extension.
      </>
    ),
    tags: ['Private pool', 'Pergola'],
  },
];

function Outdoor({ onInquire }: { onInquire: () => void }) {
  return (
    <div
      data-reveal=""
      className="reya-outdoor"
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
        marginTop: '15em',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(32px,4vw,48px)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center' }}>
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
          Every home. Every plot.
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
            lineHeight: 1.1,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          Outside is part<span className="reya-res-brk"> </span>of the plan.
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: 10 }}>
        {outdoorCards.map((c) => (
          <div
            key={c.num}
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 'clamp(390px,54vh,560px)',
              display: 'flex',
            }}
          >
            <Image src={c.img} alt={c.alt} fill sizes="(max-width: 880px) 100vw, 50vw" style={{ objectFit: 'cover', filter: 'brightness(0.9)' }} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top,rgba(28,20,16,0.96) 0%,rgba(28,20,16,0.8) 34%,rgba(28,20,16,0.28) 66%,rgba(28,20,16,0) 100%),linear-gradient(to right,rgba(28,20,16,0.35) 0%,rgba(28,20,16,0) 55%)',
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                marginTop: 'auto',
                padding: 'clamp(28px,3.5vw,44px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span
                  className="font-display"
                  style={{
                    flex: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    border: '1px solid oklch(from var(--reya-cream) l c h / 0.55)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem,2.3vw,2.1rem)',
                    color: 'var(--reya-cream)',
                  }}
                >
                  {c.num}
                </span>
                <span
                  className="font-display"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem,2.4vw,2rem)',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: 'var(--reya-cream)',
                  }}
                >
                  {c.kind}
                </span>
              </div>
              <p
                className="reya-mbr"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.5,
                  color: 'var(--reya-cream)',
                  opacity: 0.98,
                  margin: 0,
                  maxWidth: 'none',
                }}
              >
                {c.body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, paddingTop: 4 }}>
                {c.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-sm)',
                      color: 'var(--reya-cream)',
                      borderBottom: '1px solid oklch(from var(--reya-cream) l c h / 0.4)',
                      paddingBottom: 5,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                    }}
                  >
                    <TickIcon />
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={onInquire}
                className="reya-cta reya-cta--outline"
                style={{ alignSelf: 'flex-start', padding: '10px 22px', marginTop: 22 }}
              >
                Request Prices and Plans
              </button>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'calc(var(--text-body) * 1.15)',
          lineHeight: 1.7,
          color: 'var(--reya-earth-brown)',
          margin: 0,
          textAlign: 'center',
          maxWidth: '72ch',
          alignSelf: 'center',
        }}
      >
        Reya is best experienced, not described. Join us for coffee at our newly built sales suite
        to experience the village and coast first hand.
      </p>
      <button
        type="button"
        onClick={onInquire}
        className="reya-cta reya-cta--solid"
        style={{
          alignSelf: 'center',
          marginTop: 22,
          padding: '17px 40px',
          fontSize: 'var(--text-body-lg)',
          fontWeight: 600,
          letterSpacing: '.08em',
          textTransform: 'uppercase',
        }}
      >
        Book Your Curated Tour Now
      </button>
    </div>
  );
}
