import Image from 'next/image';

/**
 * The brand emblem, tiled tone-on-tone as the section texture (the brandbook's
 * lattice treatment, same clay ground as the "106 residences" section). The
 * path is the production emblem from public/assets/logo/reya-emblem.svg.
 */
const EMBLEM_D =
  'M244.3,0C109.6,0,0,109.6,0,244.3s5.2,58.3,15.5,85.7c14.5,38.6,38.8,73.3,70.3,100.2,1.5,1.3,3,2.5,4.5,3.7v.2c.2,0,.2,0,.2,0,43.4,35.2,97.8,54.6,153.8,54.6s110.4-19.4,153.8-54.5c0,0,0,0,.1,0l.2-.2c1.5-1.2,3-2.4,4.5-3.7,31.5-26.9,55.8-61.5,70.3-100.2,10.3-27.4,15.5-56.2,15.5-85.7C488.6,109.6,379,0,244.3,0ZM427.6,350c0,36.9-32.6,58.6-63.7,58.6-59.4,0-99.1-41-119.6-70.2-20.5,29.3-60.2,70.2-119.6,70.2s-63.7-21.7-63.7-58.6c0-70.2,102.7-100.6,102.7-131.7s-73.8-44.1-73.8-85.4,25.3-58.6,78.1-58.6,63.6,12.1,76.2,45.3c12.6-33.2,38.2-45.3,76.2-45.3s78.2,24.6,78.2,58.6-73.8,54.3-73.8,85.4,102.8,61.5,102.8,131.7ZM383.7,63.9c-19.3-6.1-40.6-8.5-59.7-8.5-34.9,0-60.7,7.7-79.8,19.8-19.1-12.1-44.9-19.8-79.8-19.8s-40.3,2.4-59.7,8.5c38.6-29.9,87-47.8,139.4-47.8s100.8,17.9,139.4,47.8ZM45.1,133.2v.4c0,55.7,97.7,62.2,97.7,84.7s-84.7,43.4-115.6,96.4c-7.3-22.7-11.1-46.3-11.1-70.4,0-40.3,10.5-78.2,29-111ZM119.2,435c58.2-3.7,100.6-40.1,125.1-67.6,24.4,27.5,66.8,63.9,125.1,67.6-37,24.2-80.4,37.4-125.1,37.4s-88.1-13.1-125.1-37.4ZM461.4,314.6c-30.9-53-115.6-70.3-115.6-96.4s97.7-28.9,97.7-84.7v-.3c18.4,32.9,28.9,70.7,28.9,111s-3.7,47.7-11.1,70.3Z';

/* One motif cell; the pattern tile staggers alternate columns by half a cell. */
const CELL = 480;

/**
 * Temporary holding page shown at `/` until the full site goes live. Static by
 * design: a server component, no client state, no scroll effects.
 */
export default function ComingSoon() {
  return (
    <main
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#ad9573',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px,4vw,64px) 1.5em',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern
            id="reya-lattice"
            width={CELL * 2}
            height={CELL}
            patternUnits="userSpaceOnUse"
          >
            {[
              `translate(0 0)`,
              `translate(${CELL} ${CELL / 2})`,
              `translate(${CELL} ${-CELL / 2})`,
            ].map((t) => (
              <path
                key={t}
                d={EMBLEM_D}
                transform={`${t} scale(${CELL / 488.6})`}
                fill="var(--reya-cream)"
                fillOpacity="0.08"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#reya-lattice)" />
      </svg>

      <div
        className="reya-cs-fade"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(28px,4.5vh,44px)',
        }}
      >
        <Image
          src="/uploads/reya-emblem-footer.webp"
          alt="Reya — Your Place in the Sun"
          width={474}
          height={540}
          priority
          style={{ height: 'clamp(190px,30vh,280px)', width: 'auto' }}
        />
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem,6vw,4.5rem)',
            lineHeight: 1.06,
            color: 'var(--reya-cream)',
            margin: 0,
          }}
        >
          Coming Soon
        </h1>
      </div>
    </main>
  );
}
