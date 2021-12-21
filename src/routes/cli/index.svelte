<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import userSettings from '$config/user_settings.js';
	import { siteConfig } from '$lib/Env.js';

	import Ajv from 'ajv';
	import SchemaValidator from '$lib/utils/schema_validator';
	import type { ContentItem } from '$lib/interfaces';
	import { ContentItemSchema } from '$lib/schema';

	const ajv = new Ajv();
	const schemaValidator = new SchemaValidator(ajv);

	export const load: Load = async ({ fetch }) => {
		const url = '/api/v1/cli/published.json';
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			const cli = schemaValidator.validate<Array<ContentItem>>(ContentItemSchema, data);
			return {
				props: { cli }
			};
		}
		return {
			status: res.status,
			error: new Error(`Ops! Something went wrong loading ${url}`)
		};
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { website } from '$config/website.js';
	export let cli: Array<ContentItem>;
</script>

<svelte:head>
	<title>Home | {website.name}</title>
</svelte:head>

<section class="artifact-container">
	<div class="content">
		{#if cli.length != 0}
			<h1>All cli</h1>
			<ul>
				{#each cli as item}
					<li>
						<a sveltekit:prefetch href={`${base}/cli/${item.slug}`}>{item.title}</a>
					</li>
				{/each}
			</ul>
		{:else}
			<h2 class="message warning">
				Nothing to show here! Create some content first and reload the page:
				<span
					><pre><code class="text-default">sveltin new content cli/getting-started</code
						></pre></span
				>
			</h2>
		{/if}
	</div>
</section>
