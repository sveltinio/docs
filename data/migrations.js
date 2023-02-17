const migrations = [
	{
		target: 'sveltin.json',
		actions: 'create or update the file.'
	},
	{
		target: 'config/defaults.js.ts',
		actions: 'make use of <span class="italic">sveltin.json</span>.'
	},
	{
		target: 'config/website.js.ts',
		actions:
			'update the props names and types accordingly to the new ones from <span class="italic">sveltin.d.ts</span>.'
	},
	{
		target: 'config/menu.js.ts',
		actions: 'make use of <span class="italic">sveltin.d.ts</span>.'
	},
	{
		target: 'src/sveltin.d.ts',
		actions: 'update the content with revisited types.'
	},
	{
		target: 'src/lib/**/*.ts',
		actions: 'make use of <span class="italic">sveltin.d.ts</span>.'
	},
	{
		target: 'src/routes/layout.ts',
		actions:
			'add <span class="italic">trailingSlash</span> as per <a target="_blank" rel="noopener noreferrer" href="https://github.com/sveltejs/kit/pull/7762">[#7719]</a>.'
	},
	{
		target: 'src/routes/**/+page.[svelte|svx]',
		actions:
			'<ul><li>replace props and types on SEO components from <span class="italic">@sveltinio/seo</span>;</li><li>replace <span class="italic">data-sveltekit-preload-data="hover"</span> with <span class="italic">data-sveltekit-preload-data="hover"</span>.</li></ul>'
	},
	{
		target: 'src/routes/**/*.svelte',
		actions:
			'if using some components from older version of sveltinio packages, add a comment just above the line informing to check the latest package version documentation.'
	},
	{
		target: 'src/routes/**/+page.server.ts',
		actions:
			'replace props and types on SEO components from <span class="italic">@sveltinio/seo</span>.'
	},
	{
		target: 'themes/**/theme.config.js',
		actions: 'make use of <span class="italic">sveltin.json</span>.'
	},
	{
		target: 'themes/**/*.svelte',
		actions:
			'if using some components from older version of sveltinio packages, add a comment just above the line informing to check the latest package version documentation.'
	},
	{
		target: 'mdsvex.config.js',
		actions:
			'<ul><li>fix usage of <span class="italic">rehype-autolink-headings</span>;</li><li>replace <span class="italic">remark-external-links</span> with <span class="italic">rehype-external-links</span>;</li><li> replace usage of <span class="italic">src/lib/utils/headings.js</span> with <span class="italic">@sveltinio/remark-headings</span>;</li><li>remove <span class="italic">remark-slug</span> import and usage.</li></ul>'
	},
	{
		target: 'svelte.config.js',
		actions:
			'<ul><li>remove <span class="italic">trailingSlash</span> as per <a target="_blank" rel="noopener noreferrer" href="https://github.com/sveltejs/kit/pull/7719">[#7719]</a>;</li><li> remove <span class="italic">config.kit.prerender.enabled</span> as per <a target="_blank" rel="noopener noreferrer" href="https://github.com/sveltejs/kit/pull/7762">[#7762]</a>;</li></ul>'
	},
	{
		target: '.env.production',
		actions: 'remove props available in <span class="italic">sveltin.json</span>.'
	},
	{
		target: 'vite.config.ts',
		actions: 'add an entry to the aliases to map <span class="italic">sveltin.d.ts</span>.'
	},
	{
		target: 'tsconfig.json',
		actions:
			'add an entry to the <span class="italic">compilerOptions.path</span> to re-map imports from <span class="italic">sveltin.d.ts</span>.'
	},
	{
		target: 'package.json',
		actions:
			'<ul><li>replace <span class="italic">remark-external-links</span> with <span class="italic">rehype-external-links</span>;</li><li>remove <span class="italic">remark-slug</span> as dev dependency;</li><li>overall dependencies updated to the latest versions.</li></ul>'
	}
];

export { migrations };
