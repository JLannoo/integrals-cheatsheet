import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://jlannoo.github.io",
  base: "/integrals-cheatsheet",
});