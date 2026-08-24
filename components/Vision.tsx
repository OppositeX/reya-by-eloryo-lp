'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { visionImages } from '@/lib/content';

export default function Vision() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % visionImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '32vh',
          marginBottom: -1,
          background:
            'linear-gradient(to bottom,rgba(173,149,115,0) 0%,rgba(173,149,115,0.05) 15%,rgba(173,149,115,0.15) 30%,rgba(173,149,115,0.32) 45%,rgba(173,149,115,0.52) 60%,rgba(173,149,115,0.72) 75%,rgba(173,149,115,0.9) 88%,#ad9573 100%)',
        }}
      />
      <section
        id="vision"
        data-screen-label="The Vision"
        style={{
          scrollMarginTop: 96,
          position: 'relative',
          background: '#ad9573',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(70px,10vh,110px) 4em clamp(56px,8vh,90px)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(12px,1.8vh,20px)',
          }}
        >
          <div
            className="reya-vis-head"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              position: 'absolute',
              top: 'clamp(28px,3.5vw,56px)',
              left: 'clamp(28px,3.5vw,56px)',
              zIndex: 3,
            }}
          >
            <h2
              data-nc-el=""
              style={{
                opacity: 0,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem,4.6vw,4rem)',
                lineHeight: 1.06,
                color: '#F3ECE1',
                margin: 0,
                textWrap: 'balance',
              }}
            >
              A new chapter in the
              <br />
              Pervolia village story.
            </h2>
            <span
              data-nc-el=""
              className="font-display"
              style={{
                opacity: 0,
                fontFamily: 'var(--font-body)',
                fontWeight: 200,
                fontSize: 'clamp(1.35rem,2.3vw,1.85rem)',
                lineHeight: 1.55,
                color: '#F3ECE1',
              }}
            >
              Well connected.
              <br />
              Slow-paced.
              <br />
              Genuinely lived.
            </span>
          </div>

          <div className="reya-collage" data-galmask="" style={{ marginTop: 0 }}>
            <div className="reya-col-main">
              {visionImages.map((im, i) => (
                <Image
                  key={im.src}
                  src={im.src}
                  alt={im.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  style={{ objectFit: 'cover', opacity: i === tick ? 1 : 0 }}
                />
              ))}
              <div
                className="reya-vis-shade"
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  background:
                    'linear-gradient(315deg,rgba(28,20,16,0.86) 0%,rgba(28,20,16,0.5) 30%,rgba(28,20,16,0) 58%),linear-gradient(160deg,rgba(28,20,16,0.5) 0%,rgba(28,20,16,0.28) 26%,rgba(28,20,16,0) 55%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          <div
            className="reya-vis-copy"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              maxWidth: 680,
              position: 'absolute',
              bottom: 'clamp(28px,3.5vw,56px)',
              right: 'clamp(28px,3.5vw,56px)',
              zIndex: 3,
            }}
          >
            <p
              data-nc-el=""
              style={{
                opacity: 0,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'clamp(1.1rem,1.5vw,1.3rem)',
                lineHeight: 1.55,
                color: '#FBF7EF',
                margin: 0,
              }}
            >
              The name Pervolia comes from the Greek for orchards &amp; true to its origin the land
              around it still produces today. Fields of wheat and artichoke reaching up to the
              horizon, punctuated by the mountains’ silhouette and calming presence of the
              Mediterranean sea.
              <span style={{ display: 'block', height: '0.55em' }} />
              Reya marks a new chapter in the village story. Modern, well-built homes conceived
              around light, air, space, and the pleasure of being outdoors.
            </p>
            <span
              data-nc-el=""
              style={{
                opacity: 0,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'var(--text-body-sm)',
                color: '#FBF7EF',
              }}
            >
              J+A Architects, Design Partners
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
