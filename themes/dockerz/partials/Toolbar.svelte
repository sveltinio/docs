<script lang="ts">
	import DarkModeToggle from '../components/_DarkModeToggle.svelte';
</script>

<nav
	class="mx-auto border-b border-skin-base bg-skin-light dark:border-skin-muted-dark dark:bg-skin-pure-dark"
>
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="flex h-16 justify-between">
			<div
				class="relative flex flex-1 items-center justify-center space-x-8 px-2 lg:ml-6 lg:justify-end"
			>
				<DarkModeToggle />
			</div>
		</div>
	</div>
</nav>
