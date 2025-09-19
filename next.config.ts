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
      },
      {
        source: "/:lang/:path*",
        has: [
          {
            type: "host",
            value: "fr.mrosati.it"
          }
        ],
        destination: "/:lang/fr/:path*"
      }
    ];
  }
};

export default nextConfig;
