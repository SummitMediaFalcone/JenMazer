import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once it's registered.
// This value is used to build sitemap.xml and every canonical/OG URL,
// so it must be correct before launch or SEO breaks silently.
const SITE = 'https://jenifermazer.com';

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
