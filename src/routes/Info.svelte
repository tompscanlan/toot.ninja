<script>
	export let name = 'no name';
	export let version = '0.0';
	export let speed = 'slow';
	export let website = 'https://toot.ninja';
</script>

<p>
	<!--	does {is_logged_in} make it?-->
	The <code>{name}</code> package is {speed} fast. Download version {version} from
	<a href="https://www.npmjs.com/package/{name}">npm</a>
	and <a href={website}>learn more here</a>
</p>

<style>
	p {
		color: #004d80;
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
		padding: 50px;
	}
</style>
