import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Must match the host Vercel actually serves, including www.
//
// Vercel is set to redirect the apex to www (jenifermazer.com 308s to
// www.jenifermazer.com). Every canonical tag, OG URL and sitemap entry is
// built from this value, so if it says apex while the server redirects to www,
// we hand Google a canonical URL that immediately bounces — which splits
// ranking signals across two hosts.
//
// If Vercel's primary domain is ever switched to the apex, change this too.
const SITE = 'https://www.jenifermazer.com';

// Pages that carry <meta name="robots" content="noindex">. Listing a noindex
// page in the sitemap sends Google two contradictory instructions, which is a
// (minor) crawl-quality signal against the site.
const NOINDEX = ['/thank-you'];

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      filter: (page) =>
        !NOINDEX.some((path) => new URL(page).pathname.replace(/\/$/, '') === path),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
