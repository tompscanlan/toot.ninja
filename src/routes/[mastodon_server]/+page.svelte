<script>
	import { page } from '$app/stores';
	import { instance_activity } from './instance_activity';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>timelines for {$page.params.mastodon_server}</h1>

<aside>
	<h2>More posts</h2>

	instance_activity:
	<pre>
		{JSON.stringify($instance_activity, undefined, 2)}
	</pre>

	{#each instance_activity as timeline}
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
