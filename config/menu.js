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
				identifier: 'new-project',
				name: 'new project',
				url: '/cli/new-project',
				weight: 1
			},
			{
				identifier: 'new-page',
				name: 'new page',
				url: '/cli/new-page',
				weight: 2
			}
		]
	}
];

export { menu as default };
