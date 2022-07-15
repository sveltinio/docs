<script>
	import { NavArrowDownIcon, NavArrowUpIcon } from '@indaco/svelte-iconoir';

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
		class="inline-flex w-full items-center border-l-2 border-transparent pr-4 hover:bg-skin-light focus:border-skin-muted dark:hover:bg-skin-dark"
	>
		<span
			class="group inline-flex items-center p-2 pl-6 text-base font-light text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover"
		>
			{headerText}
		</span>

		<NavArrowDownIcon
			class="ml-auto inline h-5 w-5 transform text-skin-accent transition-transform duration-200 dark:text-skin-accent-dark dark:hover:text-skin-accent-dark-hover {toggleArrowDown}"
		/>
		<NavArrowUpIcon
			class="ml-auto inline h-5 w-5 transform text-skin-accent transition-transform duration-200 dark:text-skin-accent-dark dark:hover:text-skin-accent-dark-hover {toggleArrowUp}"
		/>
	</button>

	<div class="-px-px border-l p-2 pl-6 dark:border-skin-base-dark" class:hidden={!expanded}>
		<slot />
	</div>
</div>
