<script>
	import NavArrowDownIcon from '@indaco/svelte-iconoir/icons/NavArrowDownIcon.svelte';
	import NavArrowUpIcon from '@indaco/svelte-iconoir/icons/NavArrowUpIcon.svelte';

	export let headerText;

	let expanded = false;
	const toggleExpand = () => (expanded = !expanded);

	$: toggleArrowUp = expanded ? 'block' : 'hidden';
	$: toggleArrowDown = expanded ? 'hidden' : 'block';
</script>

<div>
	<button
		aria-expanded={expanded}
		on:click={toggleExpand}
		class="inline-flex items-center w-full pr-4 hover:bg-skin-light dark:hover:bg-skin-dark focus:border-skin-muted border-l-2 border-transparent"
	>
		<span
			class="group inline-flex items-center p-2 pl-6 text-base font-light text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover"
		>
			{headerText}
		</span>

		<NavArrowDownIcon
			class="text-skin-accent dark:text-skin-accent-dark dark:hover:text-skin-accent-dark-hover inline w-5 h-5 ml-auto transition-transform duration-200 transform {toggleArrowDown}"
		/>
		<NavArrowUpIcon
			class="text-skin-accent dark:text-skin-accent-dark dark:hover:text-skin-accent-dark-hover inline w-5 h-5 ml-auto transition-transform duration-200 transform {toggleArrowUp}"
		/>
	</button>

	<div class="dark:border-skin-base-dark -px-px p-2 pl-6 border-l" class:hidden={!expanded}>
		<slot />
	</div>
</div>
