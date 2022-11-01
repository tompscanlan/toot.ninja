<script>
	/** @type {import('./$types').LayoutData} */ export let data;
</script>

<main>
	<!-- +page.svelte is rendered here -->
	<slot />
</main>

<aside>
	<h2>More Apps</h2>
	<ul>
		{#each data.apps as app}
			<li>
				<a href="/blog/{app.slug}">
					{app.title}
				</a>
			</li>
		{/each}
	</ul>
</aside>
