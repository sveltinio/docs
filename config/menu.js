const menu = [
	{
		identifier: 'about',
		name: 'About Sveltin',
		url: '/about',
		weight: 1
	},

	{
		identifier: 'getting-started',
		name: 'Getting Started',
		url: '/getting-started',
		weight: 2
	},
	{
		identifier: 'tutorials',
		name: 'Tutorials',
		url: '/tutorials',
		weight: 3
	},
	{
		identifier: 'cli',
		name: 'CLI',
		url: '/cli',
		weight: 4,
		children: [
			{
				identifier: 'sveltin',
				name: 'Sveltin',
				url: '/cli/sveltin',
				weight: 1
			},

			{
				identifier: 'new',
				name: 'New',
				url: '/cli/new',
				weight: 2
			},

			{
				identifier: 'new-resource',
				name: 'New-Resource',
				url: '/cli/new-resource',
				weight: 3
			},

			{
				identifier: 'new-content',
				name: 'New-Content',
				url: '/cli/new-content',
				weight: 4
			},

			{
				identifier: 'new-metadata',
				name: 'New-Metadata',
				url: '/cli/new-metadata',
				weight: 5
			},

			{
				identifier: 'new-page',
				name: 'New-Page',
				url: '/cli/new-page',
				weight: 6
			},

			{
				identifier: 'new-theme',
				name: 'New-Theme',
				url: '/cli/new-theme',
				weight: 7
			},

			{
				identifier: 'generate',
				name: 'Generate',
				url: '/cli/generate',
				weight: 8
			},

			{
				identifier: 'generate-menu',
				name: 'Generate-Menu',
				url: '/cli/generate-menu',
				weight: 9
			},

			{
				identifier: 'generate-rss',
				name: 'Generate-Rss',
				url: '/cli/generate-rss',
				weight: 10
			},

			{
				identifier: 'generate-sitemap',
				name: 'Generate-Sitemap',
				url: '/cli/generate-sitemap',
				weight: 11
			},

			{
				identifier: 'server',
				name: 'Server',
				url: '/cli/server',
				weight: 12
			},

			{
				identifier: 'prepare',
				name: 'Prepare',
				url: '/cli/prepare',
				weight: 13
			},

			{
				identifier: 'build',
				name: 'Build',
				url: '/cli/build',
				weight: 14
			},

			{
				identifier: 'preview',
				name: 'Preview',
				url: '/cli/preview',
				weight: 15
			}
		]
	}
];

export { menu as default };
