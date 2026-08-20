import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google';
import './globals.css';

/**
 * Bacley ships with the design system. Loading it through next/font means the
 * @font-face rules are inlined and the files are self-hosted with a stable
 * hash, so there is no layout shift and no extra round-trip.
 */
const bacley = localFont({
  src: [
    { path: './fonts/Bacley-Thin.woff2', weight: '100', style: 'normal' },
    { path: './fonts/Bacley-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: './fonts/Bacley-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Bacley-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Bacley-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Bacley-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Bacley-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display-loaded',
  display: 'swap',
  fallback: ['serif'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-body-loaded',
  display: 'swap',
  fallback: ['sans-serif'],
});

const SITE = 'https://reya-by-eloryo.vercel.app';
const DESCRIPTION =
  '106 private residences in Pervolia, Larnaca. Each home on its own freehold plot with a separate title deed, from €307,000. A development by Eloryo on Cyprus’s southern coast.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Reya — Residences in Pervolia, Cyprus | by Eloryo',
    template: '%s | Reya by Eloryo',
  },
  description: DESCRIPTION,
  keywords: [
    'Reya',
    'Eloryo',
    'Pervolia',
    'Larnaca',
    'Cyprus property',
    'Cyprus permanent residency',
    'freehold villas Cyprus',
  ],
  authors: [{ name: 'Eloryo' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE,
    siteName: 'Reya by Eloryo',
    title: 'Reya — Cyprus as it’s meant to be experienced',
    description: DESCRIPTION,
    images: [
      {
        url: '/uploads/hero-poster.webp',
        width: 1920,
        height: 1079,
        alt: 'Reya residences, Pervolia, Cyprus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reya — Cyprus as it’s meant to be experienced',
    description: DESCRIPTION,
    images: ['/uploads/hero-poster.webp'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#F3ECE1',
  width: 'device-width',
  initialScale: 1,
};

/** Structured data so the listing can surface as a real product in search. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ApartmentComplex',
  name: 'Reya',
  description: DESCRIPTION,
  url: SITE,
  numberOfAccommodationUnits: 106,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pervolia',
    addressRegion: 'Larnaca',
    addressCountry: 'CY',
  },
  developer: { '@type': 'Organization', name: 'Eloryo' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bacley.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Static object we control; no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
