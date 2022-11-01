// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	return {
// 		post: {
// 			title: `Title for ${params.appname} goes here`,
// 			content: `Content for ${params.appname} goes here`
// 		}
// 	};
// }

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://mastodon.lol/api/v1/timelines/public`);
	const item = await res.json();

	console.log(params);
	return { item };
}
