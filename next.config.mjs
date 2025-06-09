// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    // Ref: https://github.com/vercel/next.js/issues/54482
    unoptimized: true,
  },
  experimental: {
    reactCompiler: false,
  },
};
export default withPayload(config);
