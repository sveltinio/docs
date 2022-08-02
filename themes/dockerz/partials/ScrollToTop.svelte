<script>
	import ArrowUpCircledIcon from '@indaco/svelte-iconoir/icons/ArrowUpCircledIcon.svelte';

	export let showOnPx = 400;

	let hidden = true;
	$: scrollButton = hidden ? 'opacity-0 translate-y-24' : 'opacity-1 translate-y-2';

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}
		hidden = scrollContainer().scrollTop > showOnPx ? false : true;
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="z-50">
	<a
		href="#top"
		aria-label="Back to top"
		class="dark:text-gray-800-dark fixed bottom-0 right-0 mx-5 my-5 transform animate-bounce rounded-full bg-sky-600 p-2 text-skin-white transition-all duration-1000 ease-in-out hover:bg-sky-500 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500 {scrollButton}"
		on:click={goTop}
	>
		<ArrowUpCircledIcon size="24" />
	</a>
</div>
