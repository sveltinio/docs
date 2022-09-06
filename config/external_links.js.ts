import type { ExternalLinkItem } from '../src/lib/interfaces';
const externalLinks: Array<ExternalLinkItem> = [
	{
		identifier: 'release-notes',
		name: 'Release Notes',
		url: 'https://github.com/sveltinio/sveltin/blob/main/CHANGELOG.md',
		weight: 1
	},
	{
		identifier: 'landing',
		name: 'Landing page',
		url: 'http://sveltin.io',
		weight: 2
	},
	{
		identifier: 'github',
		name: 'GitHub Repo',
		url: 'http://github.com/sveltinio',
		weight: 3
	}
];

export { externalLinks };
