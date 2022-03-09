<script lang="ts">
	import { sveltinVersion, svelteKitVersion } from '$config/defaults.js';
</script>

<div class="mt-12 pl-6">
	<p class="text-xs font-semibold uppercase text-skin-heading dark:text-skin-heading-dark">
		Build Info
	</p>
</div>
<div class="mt-3">
	<p
		class="group p-2 pl-6 text-sm font-light text-skin-base dark:text-skin-base-dark dark:hover:bg-skin-dark dark:hover:text-skin-base-dark-hover"
	>
		Sveltin v{sveltinVersion}
	</p>
	<p
		class="group p-2 pl-6 text-sm font-light text-skin-base dark:text-skin-base-dark dark:hover:bg-skin-dark dark:hover:text-skin-base-dark-hover"
	>
		SvelteKit v{svelteKitVersion}
	</p>
</div>
