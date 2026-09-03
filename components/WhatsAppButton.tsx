import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/content';

/**
 * Floating WhatsApp entry point, pinned to the bottom-left corner. The artwork
 * is the supplied round button; sizing and the mobile scale live in
 * globals.css under .reya-wa.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="reya-wa"
    >
      <Image src="/uploads/whatsapp-button.webp" alt="" width={356} height={356} priority={false} />
    </a>
  );
}
