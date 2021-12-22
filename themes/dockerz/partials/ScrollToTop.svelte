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
		class="fixed bottom-0 right-0 p-2 mx-5 my-5 text-skin-white rounded-full bg-skin-accent hover:bg-skin-accent-hover focus:outline-none transform transition-all ease-in-out duration-1000 animate-bounce {scrollButton}"
		on:click={goTop}
	>
		<ArrowUpCircledIcon size="24" />
	</a>
</div>
