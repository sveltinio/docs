import path from 'path';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Learn more at https://github.com/sveltejs/svelte-preprocess
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: false,
			preserve: ['ld+json']
		})
	],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: true
		}),
		vite: {
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					// Alternatevaly set server.fs.strict to false
					strict: false
				}
			},
			resolve: {
				alias: {
					$config: path.resolve('config'),
					$content: path.resolve('content'),
					$data: path.resolve('data'),
					$lib: path.resolve('src/lib'),
					$themes: path.resolve('themes')
				}
			}
		}
	}
};

export default config;
