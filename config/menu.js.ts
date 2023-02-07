import type { Sveltin } from '../src/sveltin';

const menu: Array<Sveltin.MenuItem> = [
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
		identifier: 'release-notes',
		name: 'Release Notes',
		url: '/release-notes',
		weight: 3
	},
	{
		identifier: 'install',
		name: 'Installation',
		url: '/install',
		weight: 5
	},
	{
		identifier: 'quick',
		name: 'Quick Start',
		url: '/quick-start',
		weight: 5
	},
	{
		identifier: 'project-structure',
		name: 'Project Structure',
		url: '/project-structure',
		weight: 6
	},
	{
		identifier: 'cli',
		name: 'CLI',
		url: '/cli',
		weight: 7,
		children: [
			{
				identifier: 'sveltin',
				name: 'sveltin',
				url: '/cli/sveltin',
				weight: 1
			},
			{
				identifier: 'init',
				name: 'init',
				url: '/cli/init',
				weight: 2
			},
			{
				identifier: 'new',
				name: 'new',
				url: '/cli/new',
				weight: 3
			},
			{
				identifier: 'new-resource',
				name: 'new resource',
				url: '/cli/new-resource',
				weight: 4
			},
			{
				identifier: 'new-page',
				name: 'new page',
				url: '/cli/new-page',
				weight: 5
			},
			{
				identifier: 'add',
				name: 'add',
				url: '/cli/add',
				weight: 6
			},
			{
				identifier: 'add-content',
				name: 'add content',
				url: '/cli/add-content',
				weight: 7
			},
			{
				identifier: 'add-metadata',
				name: 'add metadata',
				url: '/cli/add-metadata',
				weight: 8
			},
			{
				identifier: 'generate',
				name: 'generate',
				url: '/cli/generate',
				weight: 9
			},
			{
				identifier: 'generate-menu',
				name: 'generate menu',
				url: '/cli/generate-menu',
				weight: 10
			},
			{
				identifier: 'generate-rss',
				name: 'generate rss',
				url: '/cli/generate-rss',
				weight: 11
			},
			{
				identifier: 'generate-sitemap',
				name: 'generate sitemap',
				url: '/cli/generate-sitemap',
				weight: 12
			},
			{
				identifier: 'install',
				name: 'install',
				url: '/cli/install',
				weight: 13
			},
			{
				identifier: 'server',
				name: 'server',
				url: '/cli/server',
				weight: 14
			},
			{
				identifier: 'update',
				name: 'update',
				url: '/cli/update',
				weight: 15
			},
			{
				identifier: 'build',
				name: 'build',
				url: '/cli/build',
				weight: 16
			},
			{
				identifier: 'preview',
				name: 'preview',
				url: '/cli/preview',
				weight: 17
			},
			{
				identifier: 'deploy',
				name: 'deploy',
				url: '/cli/deploy',
				weight: 18
			},
			{
				identifier: 'migrate',
				name: 'migrate',
				url: '/cli/migrate',
				weight: 19
			},
			{
				identifier: 'completion',
				name: 'completion',
				url: '/cli/completion',
				weight: 19
			}
		]
	}
];

export { menu };
