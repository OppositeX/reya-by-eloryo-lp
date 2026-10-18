import Link from 'next/link';
import { postHref } from '@/lib/blog';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

/** Renders the journal's inline markup: **bold** and [label](post:slug). */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = part.match(LINK);
        if (link) {
          const href = link[2].startsWith('post:') ? postHref(link[2].slice(5)) : link[2];
          return (
            <Link key={i} href={href}>
              {link[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}
