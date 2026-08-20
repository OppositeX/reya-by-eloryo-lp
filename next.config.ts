import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Source photography is already WebP at sensible dimensions; let Next serve
    // AVIF where the browser accepts it and generate the responsive widths.
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
};

export default nextConfig;
