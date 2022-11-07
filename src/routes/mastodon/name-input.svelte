<script>
	export let name = 'Default Name';

	$: calc = name.length;
</script>

<input bind:value={name} /> len {calc}
