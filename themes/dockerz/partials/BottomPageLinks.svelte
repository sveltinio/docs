<script lang="ts">
	import type { MenuItem, WebSite } from '@sveltinio/seo/types';
	import type { ExternalLinkItem } from '$lib/interfaces';
	import sortBy from 'lodash-es/sortBy.js';
	import { ExternalLink } from '@sveltinio/essentials';

	export let websiteData: WebSite;
	export let menuData: Array<MenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;

	const menuItems = sortBy(menuData, 'weigth');
	const externalLinks = sortBy(externalLinksData, 'weigth');
</script>

<div class="border-t bg-skin-base dark:border-skin-muted-dark dark:bg-skin-base-dark">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-2 mx-auto max-w-none">
			<div
				class="px-4 py-8 bg-skin-base dark:bg-skin-base-dark dark:border-skin-base-dark sm:px-6 lg:px-8"
			>
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<ul class="mt-2 space-y-4 lg:mt-0">
						{#each menuItems as item}
							<li>
								<a
									href={item.url}
									class="text-xs font-light text-skin-muted dark:text-skin-muted-dark hover:text-skin-muted-hover dark:hover:text-skin-muted-dark-hover sm:text-base"
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
					<ul class="mt-4 space-y-4 lg:mt-0">
						{#each externalLinks as item}
							<li>
								<ExternalLink
									id={`ext-${item.name}`}
									name={item.name}
									url={item.url}
									class="text-xs font-light text-skin-muted dark:text-skin-muted-dark hover:text-skin-muted-hover dark:hover:text-skin-muted-dark-hover sm:text-base"
								>
									{item.name}
								</ExternalLink>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div
				class="px-4 py-4 md:mt-0 bg-skin-base dark:bg-skin-base-dark dark:border-skin-base-dark sm:px-6 sm:py-8 lg:px-8"
				id="contact"
			>
				<div class="mt-8 md:mt-0 md:order-1 lg:pr-12">
					<p
						class="text-xs font-light text-skin-muted dark:text-skin-muted-dark sm:text-base"
					>
						{websiteData.copyright} Sveltin.io and <ExternalLink
							name="sveltin contributors"
							url="https://github.com/orgs/sveltinio/people"
							class="hover:text-skin-muted-hover dark:hover:text-skin-muted-dark-hover"
						>
							contributors
						</ExternalLink>.
					</p>
					<p
						class="mt-2 text-xs font-light text-skin-muted dark:text-skin-muted-dark sm:text-base lg:mt-0"
					>
						The Sveltin logos are copyright © Mirco Veltri 2021.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
