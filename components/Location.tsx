'use client';

import { useState } from 'react';
import Image from 'next/image';
import { locationRows } from '@/lib/content';

export default function Location() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="location"
      data-screen-label="Location"
      style={{
        scrollMarginTop: 96,
        background:
          'linear-gradient(to bottom, rgba(243,236,225,0.88) 0%, color-mix(in oklab, var(--reya-coastal-sand) 22%, var(--color-bg)) 34%, color-mix(in oklab, var(--reya-coastal-sand) 22%, var(--color-bg)) 72%, var(--color-bg) 100%)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        padding: 'clamp(90px,10vw,140px) 4em',
      }}
    >
      <div
        data-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          position: 'relative',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          minHeight: 'clamp(480px,46vw,860px)',
        }}
      >
        <div
          className="reya-loc-map"
          style={{
            position: 'absolute',
            top: 0,
            right: '-4em',
            // Full container height + object-fit:contain, rather than a centred
            // 16:9 box: on very wide screens a 108%-wide box is taller than the
            // section and the map spills over the copy and the next section.
            height: '100%',
            width: '108%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <Image
            className="reya-map-desk"
            src="/uploads/map-desktop.webp"
            alt="Illustrated map of Pervolia, Larnaca — Reya location"
            width={1920}
            height={1080}
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right center', display: 'block' }}
          />
          <Image
            className="reya-map-mob"
            src="/uploads/mobile-map.webp"
            alt="Illustrated map of Pervolia, Larnaca — Reya location"
            width={1080}
            height={928}
            style={{ display: 'none', width: '100%', height: 'auto' }}
          />
        </div>

        <div
          className="reya-loc-text"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            position: 'relative',
            zIndex: 2,
            width: 'min(560px,52%)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
              lineHeight: 1.08,
              color: 'var(--color-text-primary)',
              margin: '0 0 14px',
            }}
          >
            An address with a real heartbeat.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.75,
              color: 'var(--reya-earth-brown)',
              margin: '0 0 8px',
            }}
          >
            A coastal promenade runs along the shoreline, connecting the village to the peninsula. A
            morning walk along the water before the heat builds. A cycle out to the lighthouse and
            back before work. An evening meal where the air carries salt and the pace is slow by
            design. These are not weekend activities; they are the texture of ordinary life here.
            Pervolia does not perform. It simply exists, and it does so well.
          </p>

          {locationRows.map((r) => (
            <div
              key={r.id}
              className="reya-loc-row"
              onMouseEnter={() => setHovered(r.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 16,
                padding: '18px 0',
                borderBottom: '1px solid var(--color-border)',
                cursor: 'pointer',
                color: hovered === r.id ? 'var(--color-accent-primary)' : undefined,
              }}
            >
              <span
                className="font-display"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: hovered === r.id ? 'inherit' : 'var(--color-text-primary)',
                }}
              >
                {r.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body-sm)',
                  color: hovered === r.id ? 'inherit' : 'var(--reya-earth-brown)',
                  textAlign: 'right',
                  fontWeight: 300,
                }}
              >
                {r.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
