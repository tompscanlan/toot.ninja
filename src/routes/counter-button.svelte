<script>
	export let start = 0.0;
	export let step = 10.0;
  export let total = 0.0 || Number(start);

	function incrementCount() {
		total = Number(total) + Number(step);
	}

	function decrementCount() {
		total = Number(total) - Number(step);
	}
</script>

{total} Total
<button on:click={incrementCount}>
	 + {step}
</button>
<button on:click={decrementCount}>
	- {step}
</button>
