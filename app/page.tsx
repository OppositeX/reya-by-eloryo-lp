import PageShell from '@/components/PageShell';

/**
 * The route is a server component: the whole page is rendered to HTML on the
 * server, which is the point of the migration. PageShell owns only the small
 * amount of shared client state (whether the enquiry modal is open).
 */
export default function Home() {
  return <PageShell />;
}
