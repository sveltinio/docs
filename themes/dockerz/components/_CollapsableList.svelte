<script>
	import NavArrowDownIcon from '@indaco/svelte-iconoir/icons/NavArrowDownIcon.svelte';
	import NavArrowUpIcon from '@indaco/svelte-iconoir/icons/NavArrowUpIcon.svelte';

	export let headerText;
	let expanded = false;

	function handleExpanded() {
		expanded = !expanded;
	}

	$: toggleArrowUp = expanded ? 'block' : 'hidden';
	$: toggleArrowDown = expanded ? 'hidden' : 'block';
</script>

<div>
	<button
		aria-expanded={expanded}
		on:click={handleExpanded}
		class="dark:hover:bg-tuna hover:bg-white focus:border-periblue inline-flex items-center w-full pr-4 border-l-2 border-transparent"
	>
		<span
			class="text-oyster dark:text-manatee dark:hover:text-periblue hover:text-river group inline-flex items-center p-2 pl-6 text-base font-light"
		>
			{headerText}
		</span>

		<NavArrowDownIcon
			class="text-oyster dark:text-manatee dark:hover:text-periblue inline w-5 h-5 ml-auto transition-transform duration-200 transform {toggleArrowDown}"
		/>
		<NavArrowUpIcon
			class="text-oyster dark:text-manatee dark:hover:text-periblue inline w-5 h-5 ml-auto transition-transform duration-200 transform {toggleArrowUp}"
		/>
	</button>

	<div class="dark:border-tuna -px-px p-2 pl-6 border-l" class:hidden={!expanded}>
		<slot />
	</div>
</div>
