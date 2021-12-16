<script lang="ts" context="module">
	export const ssr = false;
	import type { Load } from '@sveltejs/kit';
	import { website } from '$config/website.js';
	import userSettings from '$config/user_settings.js';
	import { siteConfig } from '$lib/Env.js';

	import Ajv from 'ajv';
	import SchemaValidator from '$lib/utils/schema_validator';
	import type { ContentItem } from '$lib/interfaces';
	import { ContentItemSchema } from '$lib/schema';

	const ajv = new Ajv();
	const schemaValidator = new SchemaValidator(ajv);

	export const load: Load = async ({ page: { params } }) => {
		const { slug } = params;
		const url = '/api/v1/cli/published.json';
		const res = await fetch(url);

		if (res.ok) {
			const data = await res.json();
			const published = schemaValidator.validate<Array<ContentItem>>(ContentItemSchema, data);
			const itemIndex = published.findIndex((elem) => slug === elem.slug);
			const item = published[itemIndex];

			if (item) {
				const resourceName = 'cli';
				const next = published[itemIndex - 1]?.slug;
				const previous = published[itemIndex + 1]?.slug;

				return {
					props: {
						resourceName,
						item,
						next,
						previous
					}
				};
			}

			return {
				status: 404,
				error: new Error(`Ops! What you are looking for does not exists`)
			};
		}

		return {
			status: res.status,
			error: new Error(`Ops! Something went wrong loading ${url}`)
		};
	};
</script>

<script lang="ts">
	import TOC from '$components/_TOC.svelte';
	import PrevNext from '$themes/dockerz/components/PrevNext.svelte';

	export let item: ContentItem;
	export let resourceName: string;
	export let previous: string;
	export let next: string;
</script>

<svelte:head>
	<title>{item.title} - {website.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={item.title} />
	<meta property="og:url" content={siteConfig.baseURL} />
	<meta
		property="og:image"
		content="{siteConfig.baseURL}/{resourceName}/{item.slug}/{item.cover}"
	/>
	<meta property="og:description" content={item.headline} />
	<meta property="article:author" content={item.author} />
	<meta property="article:published_time" content={item.date} />
</svelte:head>

<section
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-32 pt-44">
		<h1
			data-animate="title"
			class="py-10 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl"
			style="opacity: 1; transform: translateY(0px);"
		>
			{item.title}
		</h1>
	</div>
</section>

<section class="mx-auto pt-6 pb-24 bg-skin-light dark:bg-skin-dark">
	<div class="px-4 mx-auto sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-lg text-left">
					<div class="space-y-8">
						<TOC
							resource={resourceName}
							slug={item.slug}
							headings={item.headings}
							withChildren={false}
						/>

						<div class="markdown-content">
							{@html item.html}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<PrevNext resource={resourceName} {previous} {next} />

<style>
	.markdown-content {
		@apply prose;
	}
</style>
