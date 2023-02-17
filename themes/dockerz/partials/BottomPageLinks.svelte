<script lang="ts">
	import type { Sveltin } from '$sveltin';
	import type { ExternalLinkItem } from '$lib/interfaces';
	import sortBy from 'lodash-es/sortBy.js';
	import { Link } from '@sveltinio/essentials';

	export let websiteData: Sveltin.WebSite;
	export let menuData: Array<Sveltin.MenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;

	const menuItems = sortBy(menuData, 'weigth');
	const externalLinks = sortBy(externalLinksData, 'weigth');
</script>

<div class="border-t bg-skin-muted dark:border-skin-muted-dark dark:bg-skin-base-dark">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto grid max-w-none grid-cols-2">
			<div class="px-4 py-8 dark:border-skin-base-dark sm:px-6 lg:px-8">
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<ul class="mt-2 space-y-4 lg:mt-0">
						{#each menuItems as item}
							<li>
								<a
									href={item.url}
									class="text-xs font-light text-skin-muted hover:text-skin-muted-hover dark:text-skin-muted-dark dark:hover:text-skin-muted-dark-hover sm:text-base"
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
					<ul class="mt-4 space-y-4 lg:mt-0">
						{#each externalLinks as item}
							<li>
								<Link
									id={`ext-${item.name}`}
									name={item.name}
									href={item.url}
									external
									class="inline-flex items-center gap-1 text-xs font-light text-skin-muted hover:text-skin-muted-hover dark:text-skin-muted-dark dark:hover:text-skin-muted-dark-hover sm:text-base"
								>
									{item.name}
								</Link>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div
				class="px-4 py-4 dark:border-skin-base-dark sm:px-6 sm:py-8 md:mt-0 lg:px-8"
				id="contact"
			>
				<div class="mt-8 md:order-1 md:mt-0">
					<p
						class="text-xs font-light text-skin-muted dark:text-skin-muted-dark sm:text-base"
					>
						{websiteData.copyright} Sveltin.io and <Link
							name="sveltin contributors"
							href="https://github.com/orgs/sveltinio/people"
							class="hover:text-skin-muted-hover dark:hover:text-skin-muted-dark-hover"
						>
							contributors
						</Link>.
					</p>
					<p
						class="mt-2 text-xs font-light text-skin-muted dark:text-skin-muted-dark sm:text-base lg:mt-0"
					>
						The Sveltin logos are copyright © Mirco Veltri.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
