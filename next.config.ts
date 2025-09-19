import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/:lang/:path*",
        has: [
          {
            type: "host",
            value: "de.mrosati.it"
          }
        ],
        destination: "/:lang/de/:path*"
      }
    ];
  }
};

export default nextConfig;
