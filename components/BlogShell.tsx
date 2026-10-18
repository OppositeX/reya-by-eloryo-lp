'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import Nav from './Nav';
import InquiryModal from './InquiryModal';
import WhatsAppButton from './WhatsAppButton';
import { HOME_PATH } from '@/lib/blog';

const InquireContext = createContext<() => void>(() => {});

/**
 * Chrome for the journal pages: the site header in its solid state (there is
 * no dark hero underneath), the enquiry modal and the WhatsApp button. Page
 * content stays server-rendered and is passed in as children.
 */
export default function BlogShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openInquire = useCallback(() => setOpen(true), []);
  const closeInquire = useCallback(() => setOpen(false), []);

  return (
    <InquireContext.Provider value={openInquire}>
      <div style={{ background: 'var(--color-bg)', overflowX: 'clip', minHeight: '100vh' }}>
        <Nav onInquire={openInquire} solid anchorBase={HOME_PATH} />
        {children}
        <WhatsAppButton />
        <InquiryModal open={open} onClose={closeInquire} />
      </div>
    </InquireContext.Provider>
  );
}

/** The "Instant Book" action the posts' call-to-action copy refers to. */
export function InstantBookButton() {
  const openInquire = useContext(InquireContext);
  return (
    <button type="button" onClick={openInquire} className="reya-cta reya-cta--solid reya-post-book">
      Instant Book
    </button>
  );
}
