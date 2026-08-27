/**
 * Canonical origin for everything search engines read: canonical link, og:url,
 * absolute image URLs, JSON-LD, robots.txt and the sitemap.
 *
 * It must be the address visitors actually land on. Pointing it at a host that
 * no longer serves the site tells Google the real page lives elsewhere, which
 * is enough to keep the live domain out of the index.
 *
 * Override per environment with NEXT_PUBLIC_SITE_URL (e.g. a preview domain).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://reya.cy').replace(/\/$/, '');
