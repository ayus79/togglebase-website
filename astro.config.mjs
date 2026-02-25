// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

// export default defineConfig({
//   site: 'https://togglebase.local',
//   integrations: [tailwind()],
// });

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ayus79.github.io',
  base: '/togglebase-website/',
  integrations: [tailwind()],
  output: 'static',
});