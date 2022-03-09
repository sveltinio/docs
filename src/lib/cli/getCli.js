import filter from 'lodash-es/filter.js';

const cli = import.meta.globEager('/content/cli/**/*.{md,svx}');
const cliList = Object.entries(cli)
	.map(([_, item]) => ({
		...item.metadata,
		...item.default.render()
	}))
	.sort((a, b) => (a.date < b.date ? 1 : -1));

const published = filter(cliList, ['draft', false]);
export { published };
