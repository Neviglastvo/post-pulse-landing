import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [astroI18next()],
  build: {
    inlineStylesheets: 'never',
    assets: 'assets',
  },
  site: 'https://neviglastvo.github.io/post-pulse-landing',
});