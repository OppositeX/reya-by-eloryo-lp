import Image from 'next/image';

/**
 * Temporary holding page shown at `/` until the full site goes live. Static by
 * design: a server component, no client state, no scroll effects.
 *
 * The side elements are the same lattice artwork the "106 residences" section
 * uses; on small screens they rotate onto the top and bottom edges (see the
 * .reya-cs-el rules in globals.css).
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
      <Image
        src="/uploads/homes-side-left.webp"
        alt=""
        width={946}
        height={1080}
        sizes="100vw"
        className="reya-cs-el reya-cs-el--a"
      />
      <Image
        src="/uploads/homes-side-right.webp"
        alt=""
        width={946}
        height={1080}
        sizes="100vw"
        className="reya-cs-el reya-cs-el--b"
      />

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
