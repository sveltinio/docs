const menu = [
	{
		identifier: 'why',
		name: 'Why Sveltin?',
		url: '/why',
		weight: 1
	},

	{
		identifier: 'getting-started',
		name: 'Getting Started',
		url: '/getting-started',
		weight: 2
	},
	{
		identifier: 'cli',
		name: 'CLI',
		url: '/cli',
		weight: 4,
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
				identifier: 'new-theme',
				name: 'new theme',
				url: '/cli/new-theme',
				weight: 7
			},

			{
				identifier: 'generate',
				name: 'generate',
				url: '/cli/generate',
				weight: 8
			},

			{
				identifier: 'generate-menu',
				name: 'generate menu',
				url: '/cli/generate-menu',
				weight: 9
			},

			{
				identifier: 'generate-rss',
				name: 'generate rss',
				url: '/cli/generate-rss',
				weight: 10
			},

			{
				identifier: 'generate-sitemap',
				name: 'generate sitemap',
				url: '/cli/generate-sitemap',
				weight: 11
			},

			{
				identifier: 'server',
				name: 'server',
				url: '/cli/server',
				weight: 12
			},

			{
				identifier: 'prepare',
				name: 'prepare',
				url: '/cli/prepare',
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
			}
		]
	}
];

export { menu as default };
