import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { sveltekit } from '@sveltejs/kit/vite';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		'process.env.VITE_SVELTEKIT_VERSION': JSON.stringify(
			String(pkg.devDependencies['@sveltejs/kit'])
		),
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
	},
	server: {
		port: 3000,
		fs: {
			// Allow serving files from one level up to the project root
			// Alternatevaly set server.fs.strict to false
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			$config: path.resolve('config'),
			$content: path.resolve('content'),
			$themes: path.resolve('themes')
		}
	},
	optimizeDeps: {
		include: ['@indaco/svelte-iconoir']
	},
	plugins: [sveltekit()]
};

export default config;
