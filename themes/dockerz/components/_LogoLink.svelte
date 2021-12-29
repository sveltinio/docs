<script>
	import SveltinLogo from './_SveltinLogo.svelte';
	export let handleNavMenu = () => {};
</script>

<a href="/" on:click={handleNavMenu}>
	<SveltinLogo />
	<span class="sr-only">Sveltin Logo</span>
</a>
