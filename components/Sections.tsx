import Image from 'next/image';
import { amenities, ownershipCards, residencyCards } from '@/lib/content';
import { Card, TickIcon } from './ui';

/**
 * The mostly static sections. No 'use client' here; they compile into the
 * client boundary of PageShell, and only Beach carries an interactive CTA.
 */

export function Phases() {
  return (
    <section
      id="phases"
      data-screen-label="The Phases"
      style={{
        scrollMarginTop: 96,
        background: '#F3ECE1',
        padding: 'clamp(80px,9vw,120px) 4em 0',
      }}
    >
      <div
        data-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          maxWidth: 840,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-primary)',
          }}
        >
          The Phases
        </span>
        <div
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius)',
            padding: 'clamp(24px,3.5vw,40px) clamp(28px,4.5vw,56px)',
            textAlign: 'left',
            width: '100%',
            maxWidth: 640,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem,4.6vw,3.4rem)',
              lineHeight: 1.05,
              color: 'var(--color-text-primary)',
              margin: 0,
              display: 'flex',
              alignItems: 'baseline',
              gap: 14,
              flexWrap: 'wrap',
            }}
          >
            si·tá·ri
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 200,
                fontSize: 'clamp(1rem,1.6vw,1.25rem)',
                letterSpacing: '.05em',
                color: 'var(--color-text-muted)',
              }}
            >
              /siˈta·ri/ · Greek σιτάρι
            </span>
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'var(--text-body)',
              color: 'var(--color-text-secondary)',
            }}
          >
            noun
          </span>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              borderTop: '1px solid var(--color-border)',
              margin: '10px 0 0',
              paddingTop: 14,
              display: 'flex',
              gap: 12,
            }}
          >
            <span style={{ fontWeight: 200 }}>1.</span>
            <span>
              <strong style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>Wheat</strong>{' '}
              — the crop and the grain.
            </span>
          </p>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-lg)',
            lineHeight: 1.75,
            color: 'var(--color-text-secondary)',
            margin: 0,
          }}
        >
          The first homes are released in the Wheat phase, named after the crop this ground has
          produced for generations &amp; that richness is still here, in the soil, in the community
          and in the heritage around it.
          <br />
          Reya arrives as the next season, picking up where the last one left off, growing the
          village and building for the families who will call it home.
        </p>
      </div>
    </section>
  );
}

export function Beach({ onInquire }: { onInquire: () => void }) {
  return (
    <section
      id="beach"
      data-screen-label="The Beach"
      style={{
        scrollMarginTop: 96,
        background: 'var(--color-bg)',
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
          maxWidth: 1100,
          margin: '0 auto clamp(32px,5vw,52px)',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          className="reya-mbr"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
            lineHeight: 1.08,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          The Mediterranean here
          <br />
          has genuine Cypriot soul.
        </h2>
        <p
          className="reya-beach-p"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-lg)',
            lineHeight: 1.75,
            color: 'var(--color-text-secondary)',
            margin: 0,
          }}
        >
          A morning on the coastal paths, the peninsula opening up around you.
          <br />
          &nbsp;Afternoons at the beach club, nowhere to be and nothing that asks anything of you.
          <br />
          Evenings at the waterfront or at your local with friends, around long tables that nobody is
          in a rush to leave.
        </p>
      </div>

      <div
        data-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
          gap: 10,
        }}
      >
        {amenities.map((a) => (
          <div key={a.title} className="reya-amenity" style={{ aspectRatio: '3/2.52', minHeight: 266 }}>
            <div className="reya-amimg">
              <Image src={a.img} alt={a.title} fill sizes="(max-width: 880px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top,rgba(28,20,16,0.72) 0%,rgba(28,20,16,0.05) 55%)',
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 26,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  color: 'var(--reya-cream)',
                  margin: 0,
                }}
              >
                {a.title}
              </h3>
              <p
                className="reya-amdesc"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body-sm)',
                  lineHeight: 1.6,
                  color: 'var(--reya-cream)',
                  margin: 0,
                }}
              >
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        data-reveal=""
        data-early-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 'clamp(48px,6vw,72px)',
        }}
      >
        <p
          className="reya-beach-cta-p"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'calc(var(--text-body) * 1.15)',
            fontWeight: 600,
            lineHeight: 1.7,
            color: 'var(--reya-earth-brown)',
            margin: 0,
            textAlign: 'center',
            maxWidth: '72ch',
          }}
        >
          Reya is best experienced, not described. Join us for coffee at our newly built sales
          suite to experience the village and coast first hand.
        </p>
        <button
          type="button"
          onClick={onInquire}
          className="reya-cta reya-cta--solid reya-beach-cta-btn"
          style={{
            marginTop: 18,
            padding: '17px 40px',
            fontSize: 'var(--text-body-lg)',
            fontWeight: 600,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
          }}
        >
          Book Your Personal Tour Now
        </button>
      </div>
    </section>
  );
}

export function Ownership() {
  return (
    <section
      id="ownership"
      data-screen-label="Ownership & Buying"
      style={{
        scrollMarginTop: 96,
        position: 'relative',
        zIndex: 3,
        background:
          'linear-gradient(to bottom, var(--color-bg) 0%, var(--color-bg-alt) 22%, var(--color-bg-alt) 100%)',
        padding: 'clamp(90px,10vw,140px) 4em 0',
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
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            maxWidth: 1200,
            marginBottom: 'clamp(32px,5vw,48px)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 200,
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)',
            }}
          >
            Buying at Reya
          </span>
          <h2
            className="reya-mbr"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem,5.6vw,4.5rem)',
              lineHeight: 1.08,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            Straightforward. Secure.<span className="reya-res-brk"> </span>
            <br />
            Legally protected from day one.
          </h2>
        </div>

        <div
          data-own-cards=""
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gap: 10,
            position: 'relative',
            zIndex: 2,
            marginBottom: 'clamp(-190px,-13vw,-110px)',
          }}
        >
          {ownershipCards.map((c) => (
            <Card key={c.eyebrow} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoastlineBridge() {
  return (
    <section
      data-screen-label="Coastline Bridge"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        margin: '-1px 0',
        padding: 0,
      }}
    >
      <Image
        src="/assets/photography/bridge-pervolia-sky.webp"
        alt="Reya villas above the dusk coastline"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, #EDE4D6 0%, #EDE4D6 10%, rgba(237,228,214,0.96) 16%, rgba(237,228,214,0.85) 22%, rgba(237,228,214,0.68) 28%, rgba(237,228,214,0.48) 34%, rgba(237,228,214,0.3) 40%, rgba(237,228,214,0.15) 46%, rgba(237,228,214,0.05) 52%, rgba(237,228,214,0) 58%),linear-gradient(to bottom, rgba(77,109,110,0) 62%, rgba(77,109,110,0.25) 74%, rgba(77,109,110,0.55) 84%, rgba(77,109,110,0.85) 93%, rgba(77,109,110,1) 100%)',
        }}
      />
    </section>
  );
}

export function Residency() {
  return (
    <section
      data-screen-label="Permanent Residency"
      style={{
        position: 'relative',
        background: 'var(--reya-dusk-teal)',
        padding: '0 4em clamp(90px,10vw,140px)',
        overflow: 'visible',
      }}
    >
      <div
        data-reveal=""
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity .8s var(--ease-standard),transform .8s var(--ease-standard)',
          position: 'relative',
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--reya-cream)',
            opacity: 0.8,
          }}
        >
          Cyprus Permanent Residency
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.3rem,4.8vw,3.6rem)',
            lineHeight: 1.15,
            color: 'var(--reya-cream)',
            margin: 0,
          }}
        >
          One investment.<span className="reya-res-brk"> </span>Multiple outcomes.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.15rem,1.7vw,1.4rem)',
            lineHeight: 1.5,
            color: 'var(--reya-cream)',
            opacity: 0.92,
            margin: 0,
            maxWidth: '64ch',
          }}
        >
          The qualifying threshold for Cyprus Permanent Residency is €300,000 <br />
          net of VAT on a new-build property purchased from a developer.
          <br />
          Every home at Reya meets it.
        </p>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem,2.6vw,2.1rem)',
            lineHeight: 1.2,
            color: 'var(--reya-cream)',
            margin: 'clamp(28px,4vw,48px) 0 0',
          }}
        >
          Cyprus is an EU member state with attractive incentives.
        </h3>

        <div
          className="reya-prgrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gap: 10,
            width: 'calc(100vw - 8em)',
            marginTop: 10,
            textAlign: 'left',
          }}
        >
          {residencyCards.map((c) => (
            <div
              key={c.title}
              style={{
                border: '1px solid oklch(from var(--reya-cream) l c h / 0.35)',
                padding: '26px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem,1.6vw,1.5rem)',
                  lineHeight: 1.3,
                  color: 'var(--reya-cream)',
                  margin: 0,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.6,
                  color: 'var(--reya-cream)',
                  opacity: 0.88,
                  margin: 0,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15.4px',
            lineHeight: 1.6,
            color: 'var(--reya-cream)',
            opacity: 0.6,
            margin: 0,
            maxWidth: '60ch',
          }}
        >
          The Cyprus PR programme is subject to government policy and changes.
          <br />
          This page is not intended as legal or financial advice.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: 'color-mix(in oklab, #ad9573 78%, var(--reya-earth-brown))',
        color: 'var(--reya-cream)',
        padding: '0 4em 28px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 26,
          padding: 'clamp(48px,6vw,80px) 0 0',
        }}
      >
        <Image
          src="/uploads/reya-emblem-footer.webp"
          alt="Reya"
          width={476}
          height={546}
          style={{ height: 215, width: 'auto' }}
        />
        <div style={{ display: 'flex', gap: 22, justifyContent: 'center' }}>
          <a href="#" aria-label="Instagram" style={{ color: 'var(--reya-cream)', opacity: 0.8 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: 'var(--reya-cream)', opacity: 0.8 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <line x1="7" y1="10" x2="7" y2="17" />
              <circle cx="7" cy="6.5" r="0.6" fill="currentColor" />
              <path d="M11 17v-4a2.5 2.5 0 0 1 5 0v4M11 10v7" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" style={{ color: 'var(--reya-cream)', opacity: 0.8 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="6" width="18" height="12" rx="3.5" />
              <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: 13,
            lineHeight: 1.7,
            opacity: 0.55,
            margin: '6px 0 0',
            maxWidth: 1000,
          }}
        >
          Artist’s impressions are for illustrative purposes only. Dimensions and specifications are
          approximate and subject to change. Prices exclude VAT. The legal seller is Flona
          Properties Ltd, incorporated in the Republic of Cyprus. Design
          partners: J+A Architects. Marketing by OTW. Full legal information to follow.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 6,
            width: '100%',
            marginTop: 12,
            paddingTop: 22,
            borderTop: '1px solid oklch(from var(--reya-cream) l c h / 0.14)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 200, fontSize: 'var(--text-eyebrow)', opacity: 0.55 }}>
            Perivolia, Larnaca, Cyprus
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 200, fontSize: 'var(--text-eyebrow)', opacity: 0.55 }}>
            © 2026 Eloryo. Reya, marketing by OTW.
          </span>
        </div>
      </div>
    </footer>
  );
}

export { TickIcon };
