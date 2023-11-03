import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: 'generateSW',
			srcDir: 'src',
			filename: 'service-worker.js', // or `my-sw.ts`
			outDir: 'build',
			/* other pwa options */
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
