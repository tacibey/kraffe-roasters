import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import mdx from "@astrojs/mdx";
import { ES_READY, RU_READY } from "./src/config/i18n.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://krafferoasters.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "ru"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          ...(ES_READY ? { es: 'es' } : {}),
          ...(RU_READY ? { ru: 'ru' } : {}),
        },
      },
      filter: (page) => {
        if (!ES_READY && page.includes('/es/')) {
          return false;
        }
        if (!RU_READY && page.includes('/ru/')) {
          return false;
        }
        return true;
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
