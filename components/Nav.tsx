'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/lib/content';
import { CloseIcon } from './ui';

export default function Nav({ onInquire }: { onInquire: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page while the drawer is open so the background does not scroll.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const linkColor = scrolled ? 'var(--color-text-primary)' : '#efeae1';
  const inquire = () => {
    setMobileOpen(false);
    onInquire();
  };

  return (
    <>
      <div
        className="reya-presale-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          height: 38,
          background: '#a3947b',
          color: '#FBF7EF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          padding: '0 16px',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body-sm)',
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ fontWeight: 500 }}>Pre-sales are now open</span>
        <span className="reya-presale-sep" aria-hidden="true" style={{ opacity: 0.6 }}>
          —
        </span>
        <button
          type="button"
          onClick={onInquire}
          className="reya-presale-cta"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
            color: 'inherit',
            letterSpacing: 'inherit',
            textTransform: 'inherit',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            cursor: 'pointer',
          }}
        >
          Book your private visit
        </button>
      </div>
      <nav
        className="reya-nav"
        style={{
          position: 'fixed',
          top: 38,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          padding: '0.75em 4em',
          background: scrolled ? 'oklch(from var(--reya-cream) l c h / 0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
          transition:
            'background 700ms var(--ease-standard),border-color 700ms var(--ease-standard)',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
          <Image
            src="/uploads/reya-logo.webp"
            alt="Reya — Your place in the sun"
            width={761}
            height={238}
            priority
            style={{
              height: 42,
              width: 'auto',
              filter: scrolled ? 'brightness(0) saturate(0) opacity(0.85)' : 'none',
              transition: 'filter 250ms var(--ease-standard)',
            }}
          />
        </a>

        <div
          className="reya-nav-links"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 34,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              className="reya-underline"
              href={l.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-sm)',
                fontWeight: 200,
                color: linkColor,
                transition: 'color 250ms var(--ease-standard)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <button type="button" onClick={inquire} className="reya-cta reya-cta--solid">
            Enquire Now
          </button>
          <button
            className="reya-nav-burger reya-iconbtn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              color: linkColor,
              transition: 'color 250ms var(--ease-standard)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(28,20,16,0.35)',
            animation: 'reyaOverlay .3s var(--ease-standard) both',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '70%',
              maxWidth: 420,
              background: 'var(--color-bg)',
              boxShadow: '-12px 0 40px rgba(28,20,16,0.25)',
              animation: 'reyaDrawer .35s var(--ease-standard) both',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px clamp(20px,6vw,32px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Image
                src="/uploads/reya-logo.webp"
                alt="Reya"
                width={761}
                height={238}
                style={{
                  height: 30,
                  width: 'auto',
                  filter: 'brightness(0) saturate(0) opacity(0.85)',
                }}
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close"
                className="reya-iconbtn"
                style={{ width: 44, height: 44, color: 'var(--color-text-primary)' }}
              >
                <CloseIcon />
              </button>
            </div>

            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 24,
              }}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  onClick={() => setMobileOpen(false)}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,8vw,2.75rem)',
                    color: 'var(--color-text-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={inquire}
              className="reya-cta reya-cta--solid"
              style={{ fontSize: 'var(--text-body)', padding: '16px 24px' }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
