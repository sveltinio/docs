import type { IGoogleFont } from '@sveltinio/services/types';

const googleFonts: Array<IGoogleFont> = [
	{
		name: 'IBM+Plex+Sans',
		weights: [200, 300, 400, 500, 600, 700]
	},
	{
		name: 'IBM+Plex+Mono',
		weights: [100, 200, 300, 400]
	}
];

export { googleFonts };
