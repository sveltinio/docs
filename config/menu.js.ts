import type { IMenuItem } from '@sveltinio/seo/types';

const menu: Array<IMenuItem> = [
	{
		identifier: 'home',
		name: 'Home',
		url: '/',
		weight: 1
	},
	{
		identifier: 'why',
		name: 'Why Sveltin?',
		url: '/why',
		weight: 2
	},
	{
		identifier: 'install',
		name: 'Installation',
		url: '/install',
		weight: 3
	},
	{
		identifier: 'quick',
		name: 'Quick Start',
		url: '/quick-start',
		weight: 4
	},
	{
		identifier: 'application-structure',
		name: 'Application Structure',
		url: '/application-structure',
		weight: 5
	},
	{
		identifier: 'cli',
		name: 'CLI',
		url: '/cli',
		weight: 6,
		children: [
			{
				identifier: 'sveltin',
				name: 'sveltin',
				url: '/cli/sveltin',
				weight: 1
			},
			{
				identifier: 'new',
				name: 'new',
				url: '/cli/new',
				weight: 2
			},
			{
				identifier: 'new-resource',
				name: 'new resource',
				url: '/cli/new-resource',
				weight: 3
			},
			{
				identifier: 'new-content',
				name: 'new content',
				url: '/cli/new-content',
				weight: 4
			},
			{
				identifier: 'new-metadata',
				name: 'new metadata',
				url: '/cli/new-metadata',
				weight: 5
			},
			{
				identifier: 'new-page',
				name: 'new page',
				url: '/cli/new-page',
				weight: 6
			},
			{
				identifier: 'generate',
				name: 'generate',
				url: '/cli/generate',
				weight: 7
			},
			{
				identifier: 'generate-menu',
				name: 'generate menu',
				url: '/cli/generate-menu',
				weight: 8
			},
			{
				identifier: 'generate-rss',
				name: 'generate rss',
				url: '/cli/generate-rss',
				weight: 9
			},
			{
				identifier: 'generate-sitemap',
				name: 'generate sitemap',
				url: '/cli/generate-sitemap',
				weight: 10
			},
			{
				identifier: 'server',
				name: 'server',
				url: '/cli/server',
				weight: 11
			},
			{
				identifier: 'prepare',
				name: 'prepare',
				url: '/cli/prepare',
				weight: 12
			},
			{
				identifier: 'update',
				name: 'update',
				url: '/cli/update',
				weight: 13
			},
			{
				identifier: 'build',
				name: 'build',
				url: '/cli/build',
				weight: 14
			},
			{
				identifier: 'preview',
				name: 'preview',
				url: '/cli/preview',
				weight: 15
			},
			{
				identifier: 'deploy',
				name: 'deploy',
				url: '/cli/deploy',
				weight: 16
			}
		]
	}
];

export { menu };
