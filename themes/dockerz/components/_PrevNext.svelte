<script lang="ts">
	import type { ResourceContent } from '@sveltinio/widgets/types';

	export let next: ResourceContent;
	export let previous: ResourceContent;
</script>

<div
	class="bg-skin-base dark:bg-skin-base-dark dark:hover:bg-skin-base-dark-hover border-t-2 border-skin-accent dark:border-skin-accent-dark"
>
	<div class="max-w-7xl mx-auto">
		<div
			class="dark:text-skin-muted-dark grid grid-cols-1 lg:grid-cols-2 lg:dark:divide-skin-muted-dark lg:divide-x"
		>
			<div>
				{#if previous.metadata.title}
					<a href={`/${previous.resource}/${previous.metadata.slug}`} class="group">
						<div
							class="px-4 pt-8 pb-16 bg-skin-base dark:bg-skin-base-dark hover:bg-skin-base-hover dark:hover:bg-skin-dark sm:px-6 md:mt-0 lg:px-8 "
						>
							<span
								class=" text-comet dark:text-manatee dark:hover:text-oyster text-sm font-normal"
							>
								Previous
							</span>
							<p
								class=" lg:text-base text-comet dark:text-manatee sm:text-xl dark:group-hover:text-periblue group-hover:text-pearl text-xs font-light"
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
							class="px-4 pt-8 pb-16 bg-skin-base dark:bg-skin-base-dark hover:bg-skin-base-hover dark:hover:bg-skin-dark sm:px-6 md:mt-0 lg:px-8 "
						>
							<span
								class="text-sm font-normal text-skin-base dark:text-skin-base-dark"
							>
								Next
							</span>
							<p
								class="space-x-2 text-xs font-light text-skin-base dark:text-skin-base-dark group-hover:text-skin-base-hover dark:group-hover:text-skin-base-dark-hover sm:text-xl lg:text-base"
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
