// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   site: 'https://oleksiilytvyn.github.io',

   vite: {
      resolve: {
         alias: {
            '~': '/src',
            '@assets': '/src/assets',
            '@components': '/src/components',
         }
      },
   },
});
