import Image from 'next/image';
import Link from 'next/link';
import { type Post, postHref } from '@/lib/blog';

/**
 * Colours come from the surrounding section's tokens, so the same card reads
 * cream-on-tan on the landing page and brown-on-cream on the journal index.
 */
export default function BlogCard({
  post,
  sizes,
  eager = false,
}: {
  post: Post;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <Link href={postHref(post.slug)} className="reya-postcard">
      <div className="reya-postcard-img">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes={sizes}
          quality={90}
          loading={eager ? 'eager' : undefined}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <span className="reya-postcard-title">{post.title}</span>
      <span className="reya-postcard-more">
        Read article
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 8h12M9.5 3.5 14 8l-4.5 4.5" />
        </svg>
      </span>
    </Link>
  );
}
