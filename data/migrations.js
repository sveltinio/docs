const migrations = [
	{
		target: 'sveltin.json',
		actions: 'create or update it'
	},
	{
		target: 'config/defaults.js.ts',
		actions: 'make use of <span class="italic">sveltin.json</span>'
	},
	{
		target: 'src/sveltin.d.ts',
		actions: 'update the content with revisited types'
	},
	{
		target: 'config/menu.js.ts',
		actions: 'make use of <span class="italic">sveltin.d.ts</span>'
	},
	{
		target: 'config/website.js.ts',
		actions: 'make use of <span class="italic">sveltin.d.ts</span>'
	},
	{
		target: 'src/sveltin.d.ts',
		actions: 'update the content with revisited types'
	},
	{
		target: 'src/lib/**/*.ts',
		actions: 'make use of <span class="italic">sveltin.d.ts</span>'
	},
	{
		target: 'src/routes/layout.ts',
		actions:
			'add <span class="italic">trailingSlash</span> as per <a target="_blank" rel="noopener noreferrer" href="https://github.com/sveltejs/kit/pull/7762">[#7719]</a>'
	},
	{
		target: 'src/routes/**/+layout.svelte',
		actions:
			'replace props and types on SEO components from <span class="italic">@sveltinio/seo</span>'
	},
	{
		target: 'src/routes/**/+page.[svelte|svx]',
		actions:
			'<ul><li>replace props and types on SEO components from <span class="italic">@sveltinio/seo</span></li><li>replace <span class="italic">data-sveltekit-preload-data="hover"</span> with <span class="italic">data-sveltekit-preload-data="hover"</span></li></ul>'
	},
	{
		target: 'themes/*/theme.config.js',
		actions: 'make use of <span class="italic">sveltin.json</span>'
	},
	{
		target: 'mdsvex.config.js',
		actions:
			'<ul><li>replace <span class="italic">remark-external-links</span> with <span class="italic">rehype-external-links</span></li><li> replace usage of <span class="italic">src/lib/utils/headings.js</span> with <span class="italic">@sveltinio/remark-headings</span> </li> <li>remove <span class="italic">remark-slug</span> import and usage</li></ul>'
	},
	{
		target: 'svelte.config.js',
		actions:
			'<ul><li>remove <span class="italic">trailingSlash</span> as per <a target="_blank" rel="noopener noreferrer" href="https://github.com/sveltejs/kit/pull/7719">[#7719]</a></li><li> remove <span class="italic">config.kit.prerender.enabled</span> as per <a target="_blank" rel="noopener noreferrer" href="https://github.com/sveltejs/kit/pull/7762">[#7762]</a></li></ul>'
	},
	{
		target: '.env.production',
		actions: 'remove props available in <span class="italic">sveltin.json</span>'
	},
	{
		target: 'package.json',
		actions:
			'<ul><li>replace <span class="italic">remark-external-links</span> with <span class="italic">rehype-external-links</span> </li><li> update dependencies to the latest versions</li></ul>'
	}
];

export { migrations };
