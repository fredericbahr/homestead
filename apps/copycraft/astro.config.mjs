import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders  } from "astro/config";
import swup from '@swup/astro';
import compressor from "astro-compressor";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://buchstabenfeder.de",
  integrations: [react(), sitemap(), swup({ progress: true, smoothScrolling: false }), compressor(), robotsTxt()],
  vite: { plugins: [tailwindcss()] },
  server: {
    port: 3001,
    open: true,
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "Delius",
    cssVariable: "--font-hand",
    weights: [300, 400, 500, 600, 700, 800],
    fallbacks: ["serif"]
  },
  {
    provider: fontProviders.google(),
    name: "Open Sans",
    cssVariable: "--font-sans",
    weights: [300, 400, 500, 600, 700, 800],
    fallbacks: ["sans-serif"]
  },
  {
    provider: fontProviders.google(),
    name: "Marcellus",
    cssVariable: "--font-heading",
    weights: [300, 400, 500, 600, 700, 800],
    fallbacks: ["serif"]
  },
  {
    provider: fontProviders.google(),
    name: "Indie Flower",
    cssVariable: "--font-quote",
    weights: [300, 400, 500, 600, 700, 800],
    fallbacks: ["cursive"]
  }]
});
