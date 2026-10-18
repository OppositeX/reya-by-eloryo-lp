import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Source photography is already WebP at sensible dimensions; let Next serve
    // AVIF where the browser accepts it and generate the responsive widths.
    formats: ['image/avif', 'image/webp'],
    // 75 is the default; 90 is for the journal photography, which looked soft
    // at the default on cards and post heroes.
    qualities: [75, 90],
  },
  poweredByHeader: false,
};

export default nextConfig;
