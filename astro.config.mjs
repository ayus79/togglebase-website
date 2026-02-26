import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ayus79.github.io',
  base: '/flagswitch-website/',
  integrations: [tailwind()],
  output: 'static',
});