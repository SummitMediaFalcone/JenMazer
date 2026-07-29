import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once it's registered.
// This value is used to build sitemap.xml and every canonical/OG URL,
// so it must be correct before launch or SEO breaks silently.
const SITE = 'https://jenifermazer.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
