import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // dynamicIO: true,
    useCache: true,
    clientSegmentCache: true,
    devtoolNewPanelUI: true,
    devtoolSegmentExplorer: true,
  },
  // devIndicators: false,
};

export default nextConfig;
