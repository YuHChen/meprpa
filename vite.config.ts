import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      // there are issues with branch coverage due to svelte compiler
      // see https://github.com/sveltejs/svelte/issues/7824
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
});
