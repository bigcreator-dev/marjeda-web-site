import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/marjeda-web-site',
  site: 'https://bigcreator-dev.github.io/marjeda-web-site/',
  trailingSlash: "never",
});