<script>
	import { user } from './user.js';
	$: authenticated = $user.loggedIn;
</script>

{#if authenticated}
	<p>Super secret stuff!</p>
{:else}
	<button on:click={() => user.login()}>Log In</button>
{/if}
