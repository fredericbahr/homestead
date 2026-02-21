// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import swup from '@swup/astro';
import compressor from "astro-compressor";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://fredericbahr.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap(), swup({ progress: true, smoothScrolling: false }), compressor(), robotsTxt()],
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
