import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

/**
 * The full landing page, kept reachable while the root route serves the
 * coming-soon holding page. Not indexed and not in the sitemap; delete this
 * route once the site goes live at /.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Preview() {
  return <PageShell />;
}
