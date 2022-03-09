<script lang="ts">
	import type { ResourceContent } from '@sveltinio/widgets/types';

	export let next: ResourceContent;
	export let previous: ResourceContent;
</script>

<div
	class="border-t-2 border-skin-accent bg-skin-base dark:border-skin-accent-dark dark:bg-skin-base-dark dark:hover:bg-skin-base-dark-hover"
>
	<div class="mx-auto max-w-7xl">
		<div
			class="grid grid-cols-1 dark:text-skin-muted-dark lg:grid-cols-2 lg:divide-x lg:dark:divide-skin-muted-dark"
		>
			<div>
				{#if previous.metadata.title}
					<a href={`/${previous.resource}/${previous.metadata.slug}`} class="group">
						<div
							class="bg-skin-base px-4 pt-8 pb-16 hover:bg-skin-base-hover dark:bg-skin-base-dark dark:hover:bg-skin-dark sm:px-6 md:mt-0 lg:px-8 "
						>
							<span
								class=" text-comet dark:text-manatee text-sm font-normal dark:hover:text-oyster"
							>
								Previous
							</span>
							<p
								class=" text-comet dark:text-manatee dark:group-hover:text-periblue group-hover:text-pearl text-xs font-light sm:text-xl lg:text-base"
							>
								{previous.metadata.title}
							</p>
						</div>
					</a>
				{/if}
			</div>

			<div>
				{#if next.metadata.title}
					<a href={`/${previous.resource}/${next.metadata.slug}`} class="group ">
						<div
							class="bg-skin-base px-4 pt-8 pb-16 hover:bg-skin-base-hover dark:bg-skin-base-dark dark:hover:bg-skin-dark sm:px-6 md:mt-0 lg:px-8 "
						>
							<span
								class="text-sm font-normal text-skin-base dark:text-skin-base-dark"
							>
								Next
							</span>
							<p
								class="space-x-2 text-xs font-light text-skin-base group-hover:text-skin-base-hover dark:text-skin-base-dark dark:group-hover:text-skin-base-dark-hover sm:text-xl lg:text-base"
							>
								{next.metadata.title}
							</p>
						</div>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
