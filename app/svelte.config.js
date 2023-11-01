import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'dist',
			assets: 'dist',
			fallback: 'index.html',
			precompress: false,
			strict: true,
			trailingSlash: 'always'
		}),
		alias: {
			// these are the aliases and paths to them
			'@components': './src/lib/components',
			'@lib': './src/lib',
			'@utils': './src/utils',
			'@assets': './src/lib/assets',
		},
		files: {
			serviceWorker: 'src/service-worker.js', // or `src/my-sw.ts`
		},
		serviceWorker: {
			register: false
		},
	}
};

export default config;
