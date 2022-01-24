import type { IWebSite } from '@sveltinio/seo/types';

const website: IWebSite = {
	name: 'docs.sveltin.io',
	baseURL: 'https://docs.sveltin.io',
	language: 'en-GB',
	logo: 'logo.png',
	title: 'Sveltin CLI Documentation site',
	slogan: 'Documentation site for Sveltin CLI',
	description:
		'Sveltin CLI Documentation site. Here you can learn more on how to use Sveltin CLI to boost you productivity working on SvelteKit powered static websites.',
	seoDescription:
		'Sveltin CLI Documentation site. Here you can learn more on how to use Sveltin CLI to boost you productivity working on SvelteKit powered static websites.',
	favicon: 'favicon.png',
	copyright: 'Apache 2.0 License @ 2021-present',
	keywords:
		'sveltekit, sveltin, documentation, endpoints, slug, cli, svelte, static site generator, tailwind',
	contactEmail: '',
	sitemap: {
		changefreq: 'monthly',
		priority: 0.5
	},
	socials: {
		linkedin: '',
		twitter: '',
		github: 'https://github.com/sveltinio',
		facebook: '',
		instagram: '',
		youtube: ''
	},
	webmaster: {
		name: 'indaco',
		address: 'Somewhere, World (Milky Way)',
		contactEmail: 'github@mircoveltri.me'
	}
};

export { website };
