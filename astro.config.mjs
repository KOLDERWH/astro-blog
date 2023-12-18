import { defineConfig } from 'astro/config';
 import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
   integrations: [preact()],
   redirects: {
    '/': '/blog/1',
    '/blog': '/blog/1'
  }

});

