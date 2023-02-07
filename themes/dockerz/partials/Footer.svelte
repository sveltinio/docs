<script lang="ts">
	import { Link } from '@sveltinio/essentials';

	import SveltinLogo from '../components/_SveltinLogo.svelte';
</script>

<footer
	class="border-t bg-skin-muted dark:bg-skin-base-dark dark:border-skin-muted-dark"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto px-4 py-12 sm:px-6 lg:px-8">
		<div class="flex items-center justify-center text-center lg:justify-between lg:text-left">
			<div class="space-y-8 text-skin-muted dark:text-skin-muted-dark">
				<div
					class="flex w-full flex-col items-center justify-center font-light tracking-tighter lg:flex-row lg:justify-between"
				>
					<SveltinLogo />
					<div class="flex flex-col items-center justify-center">
						<p
							class="mx-auto mt-2 ml-0 text-sm font-medium text-skin-body dark:text-skin-body-dark lg:ml-12"
						>
							This site uses the <span class="italic">Dockerz</span>&nbsp;theme by <Link
								name="michael andreuzza"
								href="https://www.michaelandreuzza.com/"
								class="underline">Michael Andreuzza</Link
							>.&nbsp; <br class="block lg:hidden" /> Icons by <Link
								name="Iconoir"
								href="https://iconoir.com"
								class="underline">Iconoir</Link
							> via <Link
								name="svelte-iconoir"
								href="https://www.npmjs.com/package/@indaco/svelte-iconoir"
								class="italic">svelte-iconoir</Link
							>.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
