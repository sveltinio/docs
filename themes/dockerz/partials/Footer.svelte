<script lang="ts">
	import ModernImage from '$components/_ModernImage.svelte';
	import { website } from '$config/website';

	export let cliVersion: string;
</script>

<div class="border-t border-antiflash bg-ghost dark:border-gun dark:bg-cinder">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-2 mx-auto max-w-none">
			<div
				class="
          px-4
          py-8
          bg-ghost
          dark:bg-cinder dark:border-tuna
          sm:px-6
          lg:px-8
        "
			>
				<div class="grid grid-cols-1 lg:grid-cols-3">
					<ul role="list" class="mt-4 space-y-4 lg:mt-0">
						<li>
							<a
								href="./index.html"
								class="
                  text-xs
                  font-light
                  text-skin-muted
                  dark:text-skin-muted-dark
                  hover:text-skin-muted-hover
                  dark:hover:text-skin-muted-dark-hover
                  sm:text-xl
                  lg:text-base
                "
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="./features.html"
								class="
                  text-xs
                  font-light
                  text-skin-muted
                  dark:text-skin-muted-dark
                  hover:text-skin-muted-hover
                  dark:hover:text-skin-muted-dark-hover
                  sm:text-xl
                  lg:text-base
                "
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="./about.html"
								class="
                  text-xs
                  font-light
                  text-skin-muted
                  dark:text-skin-muted-dark
                  hover:text-skin-muted-hover
                  dark:hover:text-skin-muted-dark-hover
                  sm:text-xl
                  lg:text-base
                "
							>
								About
							</a>
						</li>
					</ul>
					<ul role="list" class="mt-4 space-y-4 lg:mt-0">
						<li>
							<a
								href="./index.html"
								class="
                  text-xs
                  font-light
                  text-skin-muted
                  dark:text-skin-muted-dark
                  hover:text-skin-muted-hover
                  dark:hover:text-skin-muted-dark-hover
                  sm:text-xl
                  lg:text-base
                "
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="./features.html"
								class="
                  text-xs
                  font-light
                  text-skin-muted
                  dark:text-skin-muted-dark
                  hover:text-skin-muted-hover
                  dark:hover:text-skin-muted-dark-hover
                  sm:text-xl
                  lg:text-base
                "
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="./about.html"
								class="
                  text-xs
                  font-light
                  text-skin-muted
                  dark:text-skin-muted-dark
                  hover:text-skin-muted-hover
                  dark:hover:text-skin-muted-dark-hover
                  sm:text-xl
                  lg:text-base
                "
							>
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="
          px-4
          py-8
          md:mt-0
          bg-ghost
          dark:bg-cinder dark:border-tuna
          sm:px-6
          lg:px-8
        "
				id="contact"
			>
				<div class="mt-8 md:mt-0 md:order-1 lg:pr-12">
					<p
						class="
              text-xs
              font-light
              text-skin-muted
              dark:text-skin-muted-dark
              sm:text-xl
              lg:text-base
            "
					>
						Have questions? Email us at email@example.com
					</p>
					<p
						class="
              text-xs
              font-light
              text-skin-muted
              dark:text-skin-muted-dark
              sm:text-xl
              lg:text-base
            "
					>
						Dockerz ©

						<span x-text="new Date().getFullYear()" />
						<a
							href="https://wickedlabs.dev/"
							class="text-skin-link hover:text-skin-link-hover">Wicked Labs</a
						>
						All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<footer
	class="border-t border-antiflash bg-ghost dark:bg-cinder dark:border-gun"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex justify-center text-center lg:text-left lg:justify-between ">
			<div class="space-y-8 text-comet dark:text-santa">
				<div
					class="inline-flex justify-between items-center w-full font-bold tracking-tighter "
				>
					<ModernImage
						pathToFile={website.logo}
						altText="{website.title} logo"
						webp
						avif={false}
						class="w-28 h-auto lazyload"
						width="24px"
						height="32px"
					/>
					<p class="mt-2 mx-auto ml-12 text-sm lg:w-1/2 text-club ">
						Wicked templates for wicked dev's
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
