import { defineConfig } from 'astro/config';
import katex from 'astro-katex';
// https://astro.build/config
export default defineConfig({
  integrations: [ katex() ],
  site: "https://integrals.jlannoo.dev",
});