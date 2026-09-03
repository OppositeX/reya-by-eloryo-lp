'use client';

import { useEffect } from 'react';

/**
 * All the scroll-driven motion, in one place.
 *
 * GSAP, ScrollTrigger and Lenis are npm dependencies now rather than four CDN
 * <script> tags, and they are imported dynamically so none of it blocks first
 * paint. Everything degrades to plain visible content if the import fails.
 *
 * The three.js "silk veil" from the export is deliberately not ported: it
 * targeted `[data-silkwrap]`, an element that does not exist in the markup, so
 * it never rendered anything.
 */
export default function ScrollEffects() {
  useEffect(() => {
    // Respect the user's motion preference: reveal everything, animate nothing.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // The hero (`#top`) is position:sticky, so native fragment navigation and
    // element-based scrollTo both measure its *stuck* rect and barely move the
    // page. Any link to #top must scroll to 0 explicitly. Once Lenis owns
    // anchor clicks (`smooth`), it takes over and this fallback steps aside.
    let smooth = false;
    const onLogoTop = (e: MouseEvent) => {
      if (smooth) return;
      if (!(e.target as HTMLElement).closest?.('a[href="#top"]')) return;
      e.preventDefault();
      window.scrollTo(0, 0);
    };
    document.addEventListener('click', onLogoTop);

    const revealAll = () =>
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });

    if (reduced) {
      revealAll();
      document
        .querySelectorAll<HTMLElement>('[data-nc-el],[data-vi-el],[data-villas-el]')
        .forEach((el) => {
          el.style.opacity = '1';
        });
      document
        .querySelectorAll<HTMLElement>('[data-closefill] > span')
        .forEach((el) => (el.style.clipPath = 'inset(0 0 0 0)'));
      document.querySelector('[data-own-cards]')?.classList.add('reya-cards-in');
      return () => document.removeEventListener('click', onLogoTop);
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      // A safety net: if the libraries are slow or blocked, show the content.
      const fallback = setTimeout(revealAll, 1800);

      const [{ gsap }, { ScrollTrigger }, Lenis] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('lenis').then((m) => m.default),
      ]).catch(() => [] as never);

      if (cancelled) return;
      clearTimeout(fallback);

      if (!gsap) {
        revealAll();
        return;
      }
      gsap.registerPlugin(ScrollTrigger);

      // --- smooth scrolling -------------------------------------------------
      const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
      smooth = true;
      let raf = requestAnimationFrame(function tick(t: number) {
        lenis.raf(t);
        raf = requestAnimationFrame(tick);
      });
      lenis.on('scroll', ScrollTrigger.update);

      const onAnchor = (e: MouseEvent) => {
        const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
        if (!a) return;
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        if (href === '#top') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.4 });
          return;
        }
        // Sections whose visual anchor should end up vertically centred rather
        // than pinned under the header. The selector names the block to centre
        // (the section itself carries large paddings that would skew it).
        const centerSel: Record<string, string> = {
          '#gallery': '#gallery .reya-galstage',
          '#location': '#location [data-reveal]',
        };
        if (centerSel[href]) {
          const target = document.querySelector(centerSel[href]);
          if (target) {
            e.preventDefault();
            const r = target.getBoundingClientRect();
            // Centre when the block fits the viewport; otherwise leave room
            // for the fixed header (38px bar + nav).
            const gap = Math.max((window.innerHeight - r.height) / 2, 104);
            lenis.scrollTo(Math.max(window.scrollY + r.top - gap, 0), { duration: 1.4 });
            return;
          }
        }
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
      };
      document.addEventListener('click', onAnchor);

      // --- generic reveals --------------------------------------------------
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            io.unobserve(el);
          }),
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

      const ctx = gsap.context(() => {
        const scrub = (trigger: Element, start: string, end: string, scrubAmt = 0.7) => ({
          trigger,
          start,
          end,
          scrub: scrubAmt,
        });

        // Vision headings.
        const vision = document.getElementById('vision');
        if (vision) {
          gsap.fromTo(
            vision.querySelectorAll('[data-nc-el]'),
            { opacity: 0, y: 55 },
            {
              opacity: (_i: number, el: Element) =>
                el.tagName === 'P' ? 0.92 : el.textContent?.startsWith('J+A') ? 0.6 : 0.85,
              y: 0,
              ease: 'power2.out',
              stagger: 0.22,
              scrollTrigger: scrub(vision, 'top 60%', 'top 5%'),
            },
          );
        }

        // Vision collage: centre-out mask.
        const galMask = document.querySelector('[data-galmask]');
        if (galMask) {
          gsap.fromTo(
            galMask,
            { clipPath: 'inset(42% 42% 42% 42%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'power2.inOut',
              scrollTrigger: scrub(galMask, 'top 95%', 'center 40%', 1.2),
            },
          );
        }

        // Development intro + count-up.
        const intro = document.querySelector('[data-villas-intro]');
        if (intro) {
          gsap.fromTo(
            intro.querySelectorAll('[data-vi-el]'),
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              stagger: 0.22,
              scrollTrigger: scrub(intro, 'top 88%', 'top 30%'),
            },
          );
          let counted = false;
          ScrollTrigger.create({
            trigger: intro,
            start: 'top 55%',
            onEnter: () => {
              if (counted) return;
              counted = true;
              intro.querySelectorAll('span').forEach((sp) => {
                const raw = sp.textContent?.trim() ?? '';
                if (!/^[\d,]+$/.test(raw)) return;
                const target = parseInt(raw.replace(/,/g, ''), 10);
                const o = { v: 0 };
                gsap.to(o, {
                  v: target,
                  duration: 1.6,
                  ease: 'power2.out',
                  onUpdate: () => {
                    sp.textContent = Math.round(o.v).toLocaleString('en-US');
                  },
                });
              });
            },
          });
        }

        // Feature stage mask.
        const featStage = document.querySelector('[data-featstage]');
        if (featStage) {
          gsap.fromTo(
            featStage,
            { clipPath: 'inset(42% 42% 42% 42%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'power2.inOut',
              scrollTrigger: scrub(featStage, 'top 95%', 'center 40%', 1.2),
            },
          );
        }

        // Residences block.
        const villas = document.getElementById('villas');
        if (villas) {
          gsap.fromTo(
            villas.querySelectorAll('[data-villas-el]'),
            { y: 50, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              ease: 'power2.out',
              stagger: 0.18,
              scrollTrigger: scrub(villas, 'top 70%', 'top 25%'),
            },
          );
          const vImg = villas.querySelector('.reya-villas-img');
          if (vImg) {
            gsap.fromTo(
              vImg,
              { clipPath: 'inset(42% 42% 42% 42%)' },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                ease: 'power2.inOut',
                scrollTrigger: scrub(vImg, 'top 95%', 'top 45%', 1),
              },
            );
          }
          const vInfo = villas.querySelector('[data-villas-info]');
          if (vInfo) {
            gsap.fromTo(
              vInfo.children,
              { y: 45, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.12,
                scrollTrigger: scrub(vInfo, 'top 92%', 'top 60%'),
              },
            );
          }
        }

        // Bento tiles: staggered veil reveal.
        const bento = document.querySelector('.reya-bento');
        if (bento) {
          gsap.fromTo(
            bento.querySelectorAll('.reya-bento-tile'),
            { clipPath: 'inset(12% 12% 12% 12%)', autoAlpha: 0, y: 34, scale: 1.03 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              autoAlpha: 1,
              y: 0,
              scale: 1,
              ease: 'power3.out',
              stagger: 0.13,
              scrollTrigger: scrub(bento, 'top 85%', 'top 30%'),
            },
          );
        }

        // Remaining text blocks.
        document
          .querySelectorAll(
            '#interiors [data-reveal], #location [data-reveal], #beach [data-reveal], #ownership [data-reveal], section[data-screen-label="Permanent Residency"] [data-reveal]',
          )
          .forEach((block) => {
            const el = block as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            const kids = [...el.children];
            if (!kids.length) return;
            // Blocks flagged data-early-reveal (e.g. the beach CTA) finish
            // revealing shortly after they enter the viewport instead of
            // scrubbing all the way to the upper third of the screen.
            const early = el.hasAttribute('data-early-reveal');
            gsap.fromTo(
              kids,
              { y: 45, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.14,
                scrollTrigger: scrub(el, early ? 'top 98%' : 'top 82%', early ? 'top 78%' : 'top 30%'),
              },
            );
          });

        // Ownership cards.
        const ownCards = document.querySelector('[data-own-cards]');
        if (ownCards) {
          ScrollTrigger.create({
            trigger: ownCards,
            start: 'top 82%',
            onEnter: () => ownCards.classList.add('reya-cards-in'),
            onLeaveBack: () => ownCards.classList.remove('reya-cards-in'),
          });
        }

        // Closing lines: left-to-right wipe.
        const closeLines = document.querySelectorAll('[data-closefill] > span');
        if (closeLines.length) {
          const mob = window.innerWidth <= 880;
          gsap.set(closeLines, { clipPath: 'inset(0% 100% 0% 0%)' });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.reya-closing',
              start: mob ? 'top 75%' : 'top 60%',
              end: mob ? 'top 35%' : 'top 5%',
              scrub: 1.2,
            },
          });
          closeLines.forEach((ln) =>
            tl.to(ln, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 1, overwrite: 'auto' }),
          );
        }
      });

      // --- section background cross-fade ------------------------------------
      let currentBg = '';
      const onScroll = () => {
        const collage = document.querySelector('.reya-collage');
        const homes = document.getElementById('homes');
        const vision = document.getElementById('vision');
        if (!collage || !homes) return;

        const mob = window.innerWidth <= 880;
        const feat = document.querySelector('.reya-feat-grid');
        const inFeat = feat
          ? (() => {
              const r = feat.getBoundingClientRect();
              return mob
                ? r.top < window.innerHeight * 0.75 && r.bottom > window.innerHeight * 0.25
                : r.top < window.innerHeight / 2 && r.bottom > window.innerHeight / 2;
            })()
          : false;
        const villasEl = document.getElementById('villas');
        const villasActive = villasEl
          ? villasEl.getBoundingClientRect().top < window.innerHeight * (mob ? 0.75 : 0.85)
          : false;

        const target = villasActive ? '#F3ECE1' : inFeat ? '#869177' : '#ad9573';
        if (target === currentBg) return;
        currentBg = target;
        gsap.to(vision ? [homes, vision] : [homes], {
          backgroundColor: target,
          duration: 0.9,
          ease: 'power2.inOut',
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      cleanup = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
        document.removeEventListener('click', onAnchor);
        window.removeEventListener('scroll', onScroll);
        io.disconnect();
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => {
      cancelled = true;
      document.removeEventListener('click', onLogoTop);
      cleanup?.();
    };
  }, []);

  return null;
}
