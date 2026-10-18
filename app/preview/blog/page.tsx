import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import BlogShell from '@/components/BlogShell';
import { Footer } from '@/components/Sections';
import { BLOG_PATH, posts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'The Reya Journal',
  description: 'Buying property, residency, tax and everyday life in Cyprus: the Reya Journal.',
  alternates: { canonical: BLOG_PATH },
  robots: { index: false, follow: false },
};

export default function JournalIndex() {
  return (
    <BlogShell>
      <main className="reya-journal">
        <header className="reya-journal-head">
          <span className="reya-journal-eyebrow">Blog</span>
          <h1>The Reya Journal</h1>
        </header>
        <div className="reya-postgrid reya-postgrid--index">
          {posts.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              eager={i < 3}
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 40vw"
            />
          ))}
        </div>
      </main>
      <Footer />
    </BlogShell>
  );
}
