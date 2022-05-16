import type { ExternalLinkItem } from '../src/lib/interfaces';
const externalLinks: Array<ExternalLinkItem> = [
	{
		identifier: 'landing',
		name: 'Landing page',
		url: 'http://sveltin.io',
		weight: 1
	},
	{
		identifier: 'github',
		name: 'GitHub Repo',
		url: 'http://github.com/sveltinio',
		weight: 2
	}
];

export { externalLinks };
