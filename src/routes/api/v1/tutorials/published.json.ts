import tutorials from '$lib/tutorials/getTutorials.js';
import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
   const body = Object.keys(tutorials).map((slug) => ({
      slug,
      ...tutorials[slug]
   }));
   return {
      status: 200,
      body: JSON.stringify(body)
   };
}
