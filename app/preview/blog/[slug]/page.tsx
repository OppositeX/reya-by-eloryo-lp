import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogShell, { InstantBookButton } from '@/components/BlogShell';
import RichText from '@/components/RichText';
import { Footer } from '@/components/Sections';
import { BLOG_PATH, type Block, getPost, postDescription, postHref, posts } from '@/lib/blog';
import { SITE_URL } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const description = postDescription(post);
  return {
    title: post.title,
    description,
    alternates: { canonical: postHref(post.slug) },
    robots: { index: false, follow: false },
    openGraph: {
      type: 'article',
      siteName: 'Reya by Eloryo',
      title: post.title,
      description,
      url: postHref(post.slug),
      images: [
        { url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt },
      ],
    },
    twitter: { card: 'summary_large_image', title: post.title, description, images: [post.image.src] },
  };
}

function PostBlock({ block }: { block: Block }) {
  switch (block.t) {
    case 'h':
      return <h2>{block.text}</h2>;
    case 'p':
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case 'answer':
      return (
        <div className="reya-post-answer">
          {block.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      );
    case 'ol':
    case 'ul': {
      const List = block.t;
      return (
        <List>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </List>
      );
    }
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.indexOf(post);
  const prev = posts[index - 1];
  const next = posts[index + 1];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: postDescription(post),
    image: `${SITE_URL}${post.image.src}`,
    url: `${SITE_URL}${postHref(post.slug)}`,
    author: { '@type': 'Organization', name: 'Eloryo' },
    publisher: { '@type': 'Organization', name: 'Eloryo' },
    isPartOf: { '@type': 'Blog', name: 'The Reya Journal', url: `${SITE_URL}${BLOG_PATH}` },
  };

  return (
    <BlogShell>
      <main className="reya-post-page">
        <article className="reya-post">
          <div className="reya-post-main">
            <div className="reya-post-hero">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                sizes="(max-width: 860px) 100vw, (max-width: 1060px) 780px, 820px"
                priority
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div className="reya-post-meta">
              <Link href={BLOG_PATH} className="reya-post-back">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 8H2M6.5 3.5 2 8l4.5 4.5" />
                </svg>
                The Reya Journal
              </Link>
            </div>

            <h1 className="reya-post-title">{post.title}</h1>

            {post.blocks.map((block, i) => (
              <PostBlock key={i} block={block} />
            ))}
          </div>

          <aside className="reya-post-side">
            <div className="reya-post-cta">
              <div>
                <p className="reya-post-cta-title">Come and see it for yourself</p>
                <p>
                  Click the Instant Book button to arrange a visit to our sales suite in Pervolia, or a
                  virtual viewing from wherever you are.
                </p>
              </div>
              <InstantBookButton />
            </div>
          </aside>

          <div className="reya-post-end">
            <p className="reya-post-note">
              This is general information, not legal, tax or immigration advice. Cyprus rules change.
              Take advice on your own circumstances.
            </p>

            <nav className="reya-post-pager" aria-label="More from the journal">
              {prev ? (
                <Link href={postHref(prev.slug)} className="reya-post-pager-prev">
                  <span className="reya-post-pager-label">Previous</span>
                  <span className="reya-post-pager-title">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={postHref(next.slug)} className="reya-post-pager-next">
                  <span className="reya-post-pager-label">Next</span>
                  <span className="reya-post-pager-title">{next.title}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // Built from our own static content; no user input reaches this.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </BlogShell>
  );
}
