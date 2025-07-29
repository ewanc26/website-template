import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			entries: ['*'],
			origin: process.env.PUBLIC_ORIGIN || 'http://localhost:5713'
		},
		alias: {
			'$components': './src/lib/components',
			'$css': './src/lib/css',
			'$services': './src/lib/services',
			'$utils': './src/lib/utils'
		}
	}
};

export default config;
