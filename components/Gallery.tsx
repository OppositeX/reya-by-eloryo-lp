'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FILM_VIDEO, galleries } from '@/lib/content';
import { ChevronLeft, ChevronRight, CloseIcon } from './ui';
import Portal from './Portal';

const CYCLE_MS = 5000;

export default function Gallery() {
  const [cat, setCat] = useState(0);
  // Per-category position, so cycling back to a category resumes where it was.
  const [idx, setIdx] = useState<number[]>(() => galleries.map(() => 0));
  const [videoOpen, setVideoOpen] = useState(false);
  const [fullOpen, setFullOpen] = useState(false);
  const [fullIdx, setFullIdx] = useState(0);

  const gal = galleries[cat];
  // Read the latest state inside the interval without resetting it every tick.
  const state = useRef({ cat, idx, fullOpen });
  state.current = { cat, idx, fullOpen };

  useEffect(() => {
    const t = setInterval(() => {
      if (state.current.fullOpen) return;
      const nextCat = (state.current.cat + 1) % galleries.length;
      setIdx((prev) => {
        const next = [...prev];
        next[nextCat] = (next[nextCat] + 1) % galleries[nextCat].imgs.length;
        return next;
      });
      setCat(nextCat);
    }, CYCLE_MS);
    return () => clearInterval(t);
  }, []);

  const step = useCallback(
    (dir: number) =>
      setIdx((prev) => {
        const next = [...prev];
        const n = galleries[state.current.cat].imgs.length;
        next[state.current.cat] = (next[state.current.cat] + dir + n) % n;
        return next;
      }),
    [],
  );

  useEffect(() => {
    if (!fullOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullOpen(false);
      if (e.key === 'ArrowRight') setFullIdx((v) => (v + 1) % gal.imgs.length);
      if (e.key === 'ArrowLeft') setFullIdx((v) => (v - 1 + gal.imgs.length) % gal.imgs.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullOpen, gal.imgs.length]);

  return (
    <section
      id="gallery"
      data-screen-label="Gallery"
      style={{
        scrollMarginTop: 96,
        background:
          'linear-gradient(to bottom, var(--reya-dusk-teal) 0%, #bfaa89 50%, #ad9573 100%)',
        padding: '0 4em',
      }}
    >
      <div
        className="reya-galstage"
        style={{
          position: 'relative',
          width: '100%',
          height: '78vh',
          overflow: 'hidden',
          background: 'var(--reya-earth-brown)',
        }}
      >
        <div className="reya-galimgbox" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {galleries.map((g, gi) =>
            g.imgs.map((src, ii) => (
              <Image
                key={`${g.key}-${src}`}
                src={src}
                alt={g.label}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  opacity: gi === cat && ii === idx[gi] ? 1 : 0,
                  transition: 'opacity 1.2s var(--ease-standard)',
                }}
              />
            )),
          )}
          <div
            className="reya-galshade"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg,rgba(28,20,16,0.55) 0%,rgba(28,20,16,0.18) 45%,rgba(28,20,16,0.05) 70%,rgba(28,20,16,0.35) 100%),linear-gradient(to bottom,rgba(28,20,16,0.45) 0%,rgba(28,20,16,0) 22%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        <h2
          style={{
            position: 'absolute',
            left: 'clamp(20px,4vw,72px)',
            top: 'clamp(28px,5vh,56px)',
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            color: 'var(--reya-cream)',
            pointerEvents: 'none',
          }}
        >
          Photography &amp; Film.
        </h2>

        <button
          onClick={() => setVideoOpen(true)}
          className="reya-watchfilm"
          style={{
            position: 'absolute',
            right: 'clamp(24px,5vw,88px)',
            top: 'clamp(28px,5vh,56px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-body-lg)',
            background: 'rgba(28,20,16,0.35)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: 'var(--reya-cream)',
            border: '1px solid rgba(243,236,225,0.7)',
            borderRadius: 'var(--radius)',
            padding: '16px 34px',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch the Film
        </button>

        <div
          className="reya-galpanel"
          style={{
            position: 'absolute',
            left: 'clamp(20px,4vw,72px)',
            bottom: 'clamp(28px,5vh,56px)',
            backdropFilter: 'blur(22px) saturate(1.15)',
            WebkitBackdropFilter: 'blur(22px) saturate(1.15)',
            background:
              'linear-gradient(160deg,rgba(243,236,225,0.16) 0%,rgba(243,236,225,0.07) 100%)',
            border: '1px solid rgba(243,236,225,0.32)',
            boxShadow: '0 24px 60px rgba(28,20,16,0.25)',
            padding: 'clamp(18px,1.8vw,28px) clamp(20px,2.2vw,34px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            minWidth: 'min(280px,72vw)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 200,
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--reya-cream)',
              opacity: 0.75,
              marginBottom: 18,
            }}
          >
            Photography
          </span>
          {galleries.map((g, i) => (
            <button
              key={g.key}
              onClick={() => setCat(i)}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 16,
                background: 'transparent',
                border: 'none',
                borderTop: '1px solid rgba(243,236,225,0.18)',
                padding: '15px 2px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                className="font-display"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  color: 'var(--reya-cream)',
                  opacity: 0.55,
                  flex: 'none',
                  width: 22,
                }}
              >
                {`0${i + 1}`}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 200,
                  fontSize: 'clamp(1rem,1.15vw,1.15rem)',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'var(--reya-cream)',
                  opacity: i === cat ? 1 : 0.55,
                  transform: i === cat ? 'translateX(6px)' : 'none',
                  transition:
                    'opacity 250ms var(--ease-standard),transform 250ms var(--ease-standard)',
                  display: 'inline-block',
                }}
              >
                {g.label}
              </span>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--reya-cream)',
                  opacity: i === cat ? 1 : 0,
                  transition: 'opacity 250ms var(--ease-standard)',
                  marginLeft: 'auto',
                  alignSelf: 'center',
                }}
              />
            </button>
          ))}
        </div>

        <div
          className="reya-galside"
          style={{
            position: 'absolute',
            right: 'clamp(24px,5vw,88px)',
            bottom: 'clamp(28px,5vh,56px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <button className="reya-fullarrow" onClick={() => step(-1)} aria-label="Previous image" style={{ width: 46, height: 46 }}>
              <ChevronLeft />
            </button>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 200,
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '.16em',
                color: 'var(--reya-cream)',
                opacity: 0.8,
                minWidth: 44,
                textAlign: 'center',
              }}
            >
              {idx[cat] + 1} / {gal.imgs.length}
            </span>
            <button className="reya-fullarrow" onClick={() => step(1)} aria-label="Next image" style={{ width: 46, height: 46 }}>
              <ChevronRight />
            </button>
          </div>
          <h3
            onClick={() => {
              setFullIdx(idx[cat]);
              setFullOpen(true);
            }}
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5.5vw,5rem)',
              lineHeight: 1.02,
              textTransform: 'uppercase',
              color: 'var(--reya-cream)',
              textAlign: 'right',
              cursor: 'pointer',
              textWrap: 'balance',
            }}
          >
            {gal.label}
          </h3>
        </div>
      </div>

      {fullOpen && (
        <Portal>
        <div
          onClick={() => setFullOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 320,
            background: 'rgba(28,20,16,0.92)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'reyaOverlay .3s var(--ease-standard) both',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px clamp(20px,4vw,48px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 200,
                  fontSize: 'var(--text-eyebrow)',
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--reya-cream)',
                  opacity: 0.7,
                }}
              >
                Photography
              </span>
              <span
                className="font-display"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem,2.4vw,2rem)',
                  textTransform: 'uppercase',
                  color: 'var(--reya-cream)',
                }}
              >
                {gal.label}
              </span>
            </div>
            <button onClick={() => setFullOpen(false)} aria-label="Close" className="reya-iconbtn" style={{ color: 'var(--reya-cream)', width: 44, height: 44 }}>
              <CloseIcon size={28} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(12px,2vw,28px)',
              padding: '0 clamp(16px,3vw,40px)',
              minHeight: 0,
            }}
          >
            <button className="reya-fullarrow" onClick={() => setFullIdx((v) => (v - 1 + gal.imgs.length) % gal.imgs.length)} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <div style={{ position: 'relative', flex: 1, height: '100%' }}>
              <Image src={gal.imgs[fullIdx]} alt={gal.label} fill sizes="100vw" style={{ objectFit: 'contain' }} />
            </div>
            <button className="reya-fullarrow" onClick={() => setFullIdx((v) => (v + 1) % gal.imgs.length)} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            style={{
              textAlign: 'center',
              padding: '18px 0 26px',
              fontFamily: 'var(--font-body)',
              fontWeight: 200,
              fontSize: 'var(--text-body-sm)',
              letterSpacing: '.14em',
              color: 'var(--reya-cream)',
              opacity: 0.75,
            }}
          >
            {fullIdx + 1} — {gal.imgs.length}
          </div>
        </div>
        </Portal>
      )}

      {videoOpen && (
        <Portal>
        <div
          onClick={() => setVideoOpen(false)}
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
            style={{ position: 'relative', width: '100%', maxWidth: 960, animation: 'reyaPop .4s var(--ease-standard) both' }}
          >
            <button onClick={() => setVideoOpen(false)} aria-label="Close" className="reya-iconbtn" style={{ position: 'absolute', top: -44, right: 0, color: 'var(--reya-cream)' }}>
              <CloseIcon size={28} />
            </button>
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#1c1410' }}>
              <video controls autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                <source src={FILM_VIDEO} type="video/mp4" />
              </video>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-sm)',
                color: 'var(--reya-cream)',
                opacity: 0.75,
                textAlign: 'center',
                margin: '16px 0 0',
              }}
            >
              Reya: The Film. The long-form film is the extended version of this cut, available in
              the sales suite.
            </p>
          </div>
        </div>
        </Portal>
      )}
    </section>
  );
}
