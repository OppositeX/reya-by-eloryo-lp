'use client';

import { useCallback, useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Vision from './Vision';
import Development from './Development';
import Interiors from './Interiors';
import Location from './Location';
import Gallery from './Gallery';
import Closing from './Closing';
import InquiryModal from './InquiryModal';
import ScrollEffects from './ScrollEffects';
import { Beach, CoastlineBridge, Footer, Ownership, Phases, Residency } from './Sections';

/**
 * Composes the page and owns the one piece of state shared across sections:
 * whether the enquiry modal is open. The export did this by intercepting every
 * click on `a[href="#inquire"]` at the document level; an explicit callback is
 * both cheaper and easier to follow.
 */
export default function PageShell() {
  const [inquireOpen, setInquireOpen] = useState(false);
  const openInquire = useCallback(() => setInquireOpen(true), []);
  const closeInquire = useCallback(() => setInquireOpen(false), []);

  return (
    <div style={{ background: 'var(--color-bg)', overflowX: 'clip' }}>
      <ScrollEffects />
      <Nav onInquire={openInquire} />
      <Hero onInquire={openInquire} />
      <Vision />
      <Development onInquire={openInquire} />
      <Phases />
      <Interiors onInquire={openInquire} />
      <Location />
      <Beach />
      <Ownership />
      <CoastlineBridge />
      <Residency />
      <Gallery />
      <Closing onInquire={openInquire} />
      <Footer />
      <InquiryModal open={inquireOpen} onClose={closeInquire} />
    </div>
  );
}
