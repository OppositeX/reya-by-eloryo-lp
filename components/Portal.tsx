'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Renders children into <body>.
 *
 * Every `section` carries `position:relative; z-index:1` (see globals.css),
 * which makes each one a stacking context. A modal rendered inside a section
 * is therefore trapped in it -- no z-index will lift it above a *later*
 * sibling section, because the whole section paints as one unit. Escaping to
 * <body> is the fix; raising z-index is not.
 *
 * Returns null until mounted, since document does not exist during SSR.
 */
export default function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
