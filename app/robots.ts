import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Crawling stays allowed while the site is held back from search: the noindex
 * in app/layout.tsx only works if crawlers are able to fetch the page and read
 * it. Blocking here instead would leave the URL indexable as a bare link.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
