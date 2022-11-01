<script>
	let username = 'outworlder';
	let password = 'havebestpassword';
	let version = '5.0';
	let loggedin = false;

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

<h1>Welcome to SvelteKit, {username}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/app01">App 01</a>

<Info {...pkg} />

<p>something <NameInput /></p>

<p>username <NameInput bind:name={username} /></p>
<p>password <NameInput bind:name={password} /></p>

<Nested name={username} />

<CounterButton />
