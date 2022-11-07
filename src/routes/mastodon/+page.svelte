<script>
	let username = 'outworlder';
	let password = 'havebestpassword';
	let version = '5.0';
	let loggedin = false;

	import { page } from '$app/stores';

	import Topbar from './Topbar.svelte';
	import AuthOnly from './AuthOnly.svelte';

	import CounterButton from './counter-button.svelte';
	import Nested from './nested.svelte';

	import NameInput from './name-input.svelte';
	import Info from './Info.svelte';

	let pkg = {
		name: username,
		version: version,
		is_logged_in: loggedin,
		speed: 'blazing'
	};
</script>

<Topbar />

<h1>Welcome to SvelteKit, {username}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/imagespin">Go make an image spin</a>
<!--{@debug $page}-->

<h1>Mastodon Servers</h1>
<ul>
	{#each $page.data.mastodon_hosts as host}
		<li><a href={'/' + host + '/'}>{host}</a></li>
	{/each}
</ul>

<Info {...pkg} />

<p>something <NameInput /></p>

<p>username <NameInput bind:name={username} /></p>
<p>password <NameInput bind:name={password} /></p>

<Nested name={username} />

<CounterButton />

<div>
	<p>This part of the page is always visible</p>
</div>
<div>
	<p>This part is only visible to logged in users</p>
	<AuthOnly />
</div>

<style>
	div {
		border: 1px solid blue;
		padding: 5px 10px;
	}
</style>
