'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { features, stats } from '@/lib/content';
import { CheckCircleIcon } from './ui';
import Residences from './Residences';

const ROTATE_MS = 3200;

/**
 * "106 residences. One address." plus the auto-rotating feature list.
 * Hovering or clicking a row pins it; leaving resumes the rotation.
 */
export default function Development({ onInquire }: { onInquire: () => void }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((v) => (v + 1) % features.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [paused]);

  const pin = useCallback((i: number) => {
    setActive(i);
    setPaused(true);
  }, []);

  return (
    <section
      id="homes"
      data-screen-label="The Development"
      style={{
        scrollMarginTop: 96,
        background: '#ad9573',
        ['--color-text-primary' as string]: '#FBF7EF',
        ['--color-text-secondary' as string]: '#FBF7EF',
        ['--color-text-muted' as string]: 'oklch(from var(--reya-cream) l c h / 0.85)',
        ['--color-border' as string]: 'oklch(from var(--reya-cream) l c h / 0.45)',
        ['--color-accent-secondary' as string]: 'var(--reya-cream)',
        ['--color-accent-primary' as string]: 'var(--reya-earth-brown)',
        ['--color-accent-primary-hover' as string]: '#3a2a22',
        padding: '0 4em',
      }}
    >
      <div
        data-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          width: '100%',
          margin: '0 auto',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Image
          src="/uploads/homes-side-left.webp"
          alt=""
          width={946}
          height={1080}
          className="reya-homes-side"
          style={{
            position: 'absolute',
            left: '-4em',
            top: '50%',
            transform: 'translateY(-50%)',
            height: 'min(72vh,700px)',
            width: 'auto',
            pointerEvents: 'none',
            opacity: 0.9,
          }}
        />
        <Image
          src="/uploads/homes-side-right.webp"
          alt=""
          width={946}
          height={1080}
          className="reya-homes-side"
          style={{
            position: 'absolute',
            right: '-4em',
            top: '50%',
            transform: 'translateY(-50%)',
            height: 'min(72vh,700px)',
            width: 'auto',
            pointerEvents: 'none',
            opacity: 0.9,
          }}
        />

        <div
          data-villas-intro=""
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            maxWidth: 1000,
            margin: '0 auto',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <h2
            data-vi-el=""
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
              lineHeight: 1.06,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            106 residences.<span className="reya-res-brk"> </span>One address.
          </h2>
          <p
            data-vi-el=""
            className="reya-mbr"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.25rem,1.9vw,1.6rem)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            Reya embraces the warm Cypriot essence,
            <br />
            holding hands with the village centre.
            <br />
            Every home sits on its own private plot with an individual title deed.
          </p>
          <p
            data-vi-el=""
            className="reya-mbr"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.25rem,1.9vw,1.6rem)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            Not a managed apartment block. Not a shared scheme.
            <br />
            <span style={{ fontWeight: 600 }}>
              Your land
              <span aria-hidden="true" style={{ margin: '0 0.6em' }}>
                •
              </span>
              Your deed
              <span aria-hidden="true" style={{ margin: '0 0.6em' }}>
                •
              </span>
              Your boundary
            </span>
          </p>

          <div
            data-vi-el=""
            className="reya-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,minmax(180px,240px))',
              gap: 10,
              paddingTop: 36,
              justifyContent: 'center',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  border: '1px solid oklch(from var(--color-text-primary) l c h / 0.35)',
                  padding: '28px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  alignItems: 'center',
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.4rem,3.6vw,3.4rem)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.05rem,1.4vw,1.25rem)',
                    lineHeight: 1.4,
                    color: 'var(--color-text-secondary)',
                    fontWeight: 200,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-reveal=""
        className="reya-feat-grid"
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          width: '100%',
          margin: '0 auto',
          minHeight: '100vh',
          padding: '5vh 0',
          display: 'grid',
          gridTemplateColumns: '1fr 50%',
          gap: 'clamp(28px,4vw,64px)',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            justifyContent: 'space-between',
            height: '80vh',
          }}
          onMouseLeave={() => setPaused(false)}
        >
          {features.map((f, i) => (
            <div
              key={f.label}
              className="reya-featrow"
              data-featrow={i}
              onClick={() => pin(i)}
              onMouseEnter={() => pin(i)}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding:
                  i === 0
                    ? '0 12px 24px'
                    : i === features.length - 1
                      ? '24px 12px 0'
                      : '24px 12px',
                borderBottom:
                  i === features.length - 1 ? undefined : '1px solid var(--color-border)',
                cursor: 'pointer',
                opacity: i === active ? 1 : 0.45,
                transition: 'opacity .5s var(--ease-standard)',
              }}
            >
              <CheckCircleIcon />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.25rem,1.9vw,1.7rem)',
                  color: 'var(--color-text-primary)',
                  fontWeight: i === active ? 500 : undefined,
                }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <div data-featstage="" style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
          {features.map((f, i) => (
            <Image
              key={f.img}
              src={f.img}
              alt={f.label}
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                opacity: i === active ? 1 : 0,
                transform: i === active ? 'scale(1)' : 'scale(1.06)',
                transition:
                  'opacity 1.1s var(--ease-standard), transform 1.1s var(--ease-standard)',
              }}
            />
          ))}
        </div>
      </div>

      <Residences onInquire={onInquire} />
    </section>
  );
}
