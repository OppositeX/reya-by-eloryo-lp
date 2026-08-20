'use client';

import { useEffect, useRef, useState } from 'react';
import { HERO_POSTER, HERO_VIDEO } from '@/lib/content';
import { CtaLink } from './ui';

/**
 * Sticky hero. The video blurs and the copy lifts away as you scroll into the
 * vision section; both are driven straight from scrollY rather than a library,
 * since it is a single cheap read per frame.
 */
export default function Hero({ onInquire }: { onInquire: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // The clouds loop is ~7.5MB. Attaching the source only after mount keeps it
  // from competing with the poster, so the poster is what LCP measures.
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const idle =
      window.requestIdleCallback?.(() => setVideoReady(true)) ??
      window.setTimeout(() => setVideoReady(true), 200);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle as number);
      else clearTimeout(idle as number);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    // Some browsers drop out of the loop on tab restore; restart on `ended`.
    const play = () => {
      const p = video?.play();
      if (p && p.catch) p.catch(() => {});
    };
    if (video) {
      video.loop = true;
      video.muted = true;
      video.addEventListener('ended', play);
      // Nothing to play until the <source> has been attached.
      if (videoReady) {
        video.load();
        play();
      }
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.55)));
        if (videoRef.current) {
          videoRef.current.style.filter = p > 0.01 ? `blur(${(p * 14).toFixed(1)}px)` : 'none';
        }
        if (contentRef.current) {
          contentRef.current.style.opacity = String(1 - p);
          contentRef.current.style.transform = `translateY(${(-p * 120).toFixed(1)}px)`;
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
      if (video) video.removeEventListener('ended', play);
    };
  }, [videoReady]);

  return (
    <header
      id="top"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 0,
        height: '100vh',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={HERO_POSTER}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%' }}
        >
          {videoReady && <source src={HERO_VIDEO} type="video/mp4" />}
        </video>
      </div>

      <div
        ref={contentRef}
        className="reya-hero-in"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '100%',
          margin: '0 auto',
          width: '100%',
          padding: 'clamp(125px,17vh,210px) 4em 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          top: -33,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '.24em',
            textTransform: 'uppercase',
            color: '#efeae1',
            opacity: 0.9,
            textAlign: 'center',
            lineHeight: 1.9,
          }}
        >
          Reya residences by Eloryo
          <br />
          Pervolia - Larnaca
        </span>

        <h1
          className="reya-hero-h1"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-regular)' as unknown as number,
            fontSize: 'clamp(1.6rem,4.8vw,5.4rem)',
            lineHeight: 1.04,
            color: 'var(--reya-cream)',
            margin: 0,
            paddingTop: 28,
            width: '100%',
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          Cyprus as it’s meant<span className="reya-hero-brk"> </span>to be experienced
        </h1>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 18 }}>
          <CtaLink href="#vision" variant="outline" style={{ padding: '10px 22px' }}>
            Learn More
          </CtaLink>
          <button
            type="button"
            onClick={onInquire}
            className="reya-cta reya-cta--outline"
            style={{ padding: '10px 22px' }}
          >
            Enquire Now
          </button>
        </div>
      </div>

      <a
        href="#vision"
        aria-label="Scroll to explore"
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: '#efeae1',
          textShadow: '0 1px 12px rgba(28,20,16,0.4)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '.26em',
            textTransform: 'uppercase',
            opacity: 0.95,
          }}
        >
          Scroll
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '1px solid rgba(239,234,225,0.75)',
            background: 'rgba(28,20,16,0.22)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            style={{ animation: 'reyaNudge 1.9s var(--ease-standard) infinite' }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </a>
    </header>
  );
}
