<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data.data.timelines[0]);

	import { page } from '$app/stores';
</script>

<!--id: number;-->
<!--username: string;-->
<!--acct: string,-->
<!--display_name: string,-->
<!--locked: string,-->
<!--bot: string,-->
<!--discoverable: string,-->
<!--group: string,-->
<!--created_at: string,-->
<!--	note: string,-->
<!--		url: string,-->
<!--			avatar: string,-->
<!--				avatar_static: string,-->
<!--					header: string,-->
<!--header_static: string,-->
<!--followers_count: string,-->
<!--following_count: string,-->
<!--statuses_count: string,-->
<!--last_status_at: string,-->
<!--emojis: string,-->
<!--fields: string,-->

<h1>timelines for {$page.params.mastodon_server}</h1>
<!--<div>{@html data.apps.slug}</div>-->

<aside>
	<h2>More posts</h2>

	{#each data.data.timelines as timeline}
		<div class="card container">
			<a href={timeline.url}>
				{timeline.id}
			</a>

			<!--{Object.keys(timeline.account)}-->
			<div class="container">
				{@html timeline.content}
			</div>
		</div>
	{/each}
</aside>

<div>
	{@debug $page}
</div>

<style>
	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	/* Add some padding inside the card container */
	.container {
		padding: 2px 16px;
	}
</style>
