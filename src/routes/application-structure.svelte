<script lang="ts" context="module">
	import { website } from '$config/website.js';
	import { applicationStructure } from '$data/structure.js';
	import { IWebPageMetadata, OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage } from '@sveltinio/seo';

	const appStructurePage: IWebPageMetadata = {
		url: website.baseURL + '/application-structure',
		title: 'Sveltin Application structure',
		description:
			'Here you can learn about the Application Structure for a Sveltin based website.',
		keywords: website.keywords,
		image: website.baseURL + '/' + website.favicon,
		opengraph: {
			type: OpenGraphType.Website
		},
		twitter: {
			type: TwitterCardType.Summary
		}
	};
</script>

<PageMetaTags data={appStructurePage} />
<JsonLdWebPage data={appStructurePage} />
<!-- PAGE TITLE-->
<section
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			Sveltin Application structure
		</h1>
	</div>
</section>
<!-- END OF PAGE TITLE-->
<!-- PAGE CONTENT -->
<section class="pt-6 pb-24 bg-skin-light dark:bg-skin-dark">
	<div class="px-4 mx-auto sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-lg text-left">
					<div class="space-y-8">
						<p
							class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
						>
							Sveltin uses a set of conventions over configuration. If we follow the
							conventions, then we don't have to configure a lot of things on our own.
						</p>
						<p
							class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
						>
							A Sveltin app will have a number of generated files and folders that
							make up the structure of the project. Here is a basic rundown on the
							function of each of the files and folders Sveltin creates by default.
						</p>

						<!-- This example requires Tailwind CSS v2.0+ -->
						<div class="flex flex-col">
							<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div
									class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
								>
									<div
										class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-500 sm:rounded-lg"
									>
										<table
											class="min-w-full divide-y divide-gray-200 dark:divide-gray-500"
										>
											<thead
												class="bg-gray-50 dark:border-gray-300 dark:bg-skin-base-dark"
											>
												<tr>
													<th
														scope="col"
														class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-skin-body-dark uppercase tracking-wider"
													>
														File/Folder
													</th>
													<th
														scope="col"
														class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-skin-body-dark uppercase tracking-wider"
													>
														Purpose
													</th>
												</tr>
											</thead>
											<tbody>
												{#each applicationStructure as f}
													<!-- Even row -->
													<tr class="bg-skin-light dark:bg-skin-dark">
														<td
															class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-skin-body-dark"
														>
															{f.name}
														</td>
														<td
															class="px-6 py-4 whitespace-nowrap text-sm text-skin-body dark:text-skin-body-dark"
														>
															{@html f.purpose}
														</td>
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<!-- END OF PAGE CONTENT -->
