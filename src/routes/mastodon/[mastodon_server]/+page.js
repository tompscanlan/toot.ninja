// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	return {
// 		post: {
// 			title: `Title for ${params.appname} goes here`,
// 			content: `Content for ${params.appname} goes here`
// 		}
// 	};
// }

import { instance_activity } from './instance_activity.js';
import { a, b } from './data.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	// const res = await fetch(`https://` + params.mastodon_server + `/api/v1/timelines/public`);
	// const res = await fetch(`https://` + params.mastodon_server + `/api/v1/instance`);
	// let timelines = d;

	// timelines = await res.json();
	instance_activity.set(a);
	instance_activity.update((item) => ({
		...item,
		...b
	}));
	// instance_activity.update((n) => {let a=1; return {test: 1};})

	// /api/v1/timelines/tag/:hashtag
	// //GET /api/v1/instance,
	// View general information with GET /api/v1/instance,
	// 	view its peers with GET /api/v1/instance/peers or
	// its weekly activity with GET /api/v1/instance/activity, or to
	// list all custom emoji available with GET /api/v1/custom_emojis.
	// 	See GET /api/v1/directory for a directory of all available profiles.
	// 	See GET /api/v1/trends for currently trending hashtags.

	return { instance_activity };
}
