<script lang="ts">
	import type { NavigationItem } from '$lib/interfaces';

	export let resource: string;
	export let next: NavigationItem;
	export let previous: NavigationItem;
</script>

<div
	class="bg-skin-base dark:bg-skin-base-dark dark:hover:bg-skin-base-dark-hover border-t-2 border-skin-accent dark:border-skin-accent-dark"
>
	<div class="max-w-7xl mx-auto">
		<div class="dark:divide-skin-muted-dark grid grid-cols-1 lg:grid-cols-2 lg:divide-x">
			<div>
				{#if previous.title}
					<a href={`/${resource}/${previous.slug}`}>
						<div
							class=" bg-ghost dark:bg-cinder dark:hover:bg-tuna hover:bg-metal sm:px-6 lg:px-8 group px-4 pt-8 pb-16"
						>
							<span
								class=" text-comet dark:text-manatee dark:hover:text-oyster text-sm font-normal"
							>
								Previous
							</span>
							<p
								class=" lg:text-base text-comet dark:text-manatee sm:text-xl dark:group-hover:text-periblue group-hover:text-pearl text-xs font-light"
							>
								{previous.title}
							</p>
						</div>
					</a>
				{/if}
			</div>

			<div>
				{#if next.title}
					<a href={`/${resource}/${next.slug}`}>
						<div
							class=" md:mt-0 bg-skin-base dark:bg-skin-base-dark hover:bg-skin-base-hover dark:hover:bg-skin-dark sm:px-6 lg:px-8 group px-4 pt-8 pb-16"
						>
							<span
								class="text-sm font-normal text-skin-base dark:text-skin-base-dark"
							>
								Next
							</span>
							<p
								class="space-x-2 text-xs font-light text-skin-base dark:text-skin-base-dark group-hover:text-skin-base-hover dark:group-hover:text-skin-base-dark-hover sm:text-xl lg:text-base"
							>
								{next.title}
							</p>
						</div>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
