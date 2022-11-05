import { browser } from '$app/env';
// import { writeFileSync } from 'fs';

export async function post({ request }) {

	if (!browser) {
		// Only prints on the server-side
		console.log(request)
		console.log(process.env.NODE_ENV)
	} else {
		console.log(request);
	}
	const data = JSON.parse((await request.body.read()).toString());

	const file = data['image'];
	// writeFileSync(`static/avatar.png`, file, 'base64');

}
