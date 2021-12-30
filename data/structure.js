const applicationStructure = [
	{
		name: 'config',
		purpose:
			'Accessible throughout the codebase as <strong class="font-mono text-sm">$config</strong>.'
	},
	{
		name: 'config/website.js',
		purpose: 'Contains configurations for the app (name, description, logo, sitemap, etc).'
	},
	{
		name: 'config/externals.js',
		purpose: 'Contains info on external services used by the app (Google Fonts, Analytics, etc).'
	},
	{
		name: 'config/menu.js',
		purpose:
			'Contains all the entries from the available routes, <code class="font-mono text-sm">sveltin generate menu</code>.<br/>Used internally by sveltin to generate JsonLd objects too.'
	},
	{
		name: 'config/defaults.js',
		purpose: 'So far, contains info on the actual sveltin version'
	},
	{
		name: 'content',
		purpose:
			'Contains all the content generated by running <code class="font-mono text-sm">sveltin new content command</code>.<br/> Contents will be grouped by "resources" name.'
	},
	{
		name: 'src',
		purpose: 'In SvelteKit powered apps, src is where you app lives.'
	},
	{
		name: 'src/components',
		purpose:
			'Svelte private components used by other ones but not directly. <br/>Files should be named with a leading underscore prefix, _'
	},
	{
		name: 'src/lib',
		purpose:
			'Extended modules for your application.<br/>Basically a pure lib file (JS or TS) and not Svelte components.'
	},
	{
		name: 'src/routes',
		purpose:
			'Extended modules for your application.<br/>Basically a pure lib file (JS or TS) and not Svelte components.'
	},
	{
		name: 'src/routes/api/v1',
		purpose:
			'Extended modules for your application.<br/>Basically a pure lib file (JS or TS) and not Svelte components.'
	},
	{
		name: 'themes',
		purpose: 'Contains the folder structure generated by creating a new theme with sveltin'
	},
	{
		name: 'static',
		purpose:
			'Accessible throughout the codebase as <strong class="font-mono text-sm">$themes</strong>.<br/>Contains static files and compiled assets with stable URLs.<br/>When Sveltin and SvelteKit builds your site, all assets are copied over as-is.'
	}
];

export { applicationStructure };