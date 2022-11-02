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
	const res = await fetch(`https://` + params.mastodon_server + `/api/v1/timelines/public`);
	const timelines = await res.json();

	const data = {
		timelines: timelines
	};

	console.log(params);
	return { data };
}
