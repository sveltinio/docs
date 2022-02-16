<script lang="ts">
	import { sveltinVersion } from '$config/defaults.js';
	import { siteConfig } from '$lib/Env.js';
</script>

<div class="pl-6 mt-12">
	<p class="text-skin-heading dark:text-skin-heading-dark text-xs font-semibold uppercase">
		Build Info
	</p>
</div>
<div class="mt-3">
	<p
		class="p-2 pl-6 text-sm font-light text-skin-base dark:hover:text-skin-base-dark-hover dark:text-skin-base-dark dark:hover:bg-skin-dark group"
	>
		Sveltin v{sveltinVersion}
	</p>
	<p
		class="p-2 pl-6 text-sm font-light text-skin-base dark:hover:text-skin-base-dark-hover dark:text-skin-base-dark dark:hover:bg-skin-dark group"
	>
		SvelteKit v{siteConfig.skVersion}
	</p>
</div>
