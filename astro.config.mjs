import { defineConfig } from 'astro/config';
 import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
   integrations: [preact()],
   redirects: {
    '/': '/blog/1',
    '/blog': '/blog/1'
  },
   markdown: {
    // 示例：在 Markdown 中使用 prism 进行语法高亮显示
    // syntaxHighlight: 'prism',
    syntaxHighlight: 'shiki',
  }

});

