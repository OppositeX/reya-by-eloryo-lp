import ComingSoon from '@/components/ComingSoon';

/**
 * The root route serves the coming-soon holding page for now. The full landing
 * page (PageShell) is still available at /preview; to go live, render
 * <PageShell /> here again and delete app/preview.
 */
export default function Home() {
  return <ComingSoon />;
}
