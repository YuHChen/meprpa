import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      fallback: 'index.html',
    }),
    // See https://vitejs.dev/guide/static-deploy.html#github-pages
    // See https://kit.svelte.dev/docs/adapter-static#github-pages
    paths: {
      base: dev ? '' : '/meprpa',
    },
  },
};

export default config;
