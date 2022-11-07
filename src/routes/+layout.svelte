<div class="center">
	<div class="center-text">
		<slot />

		<footer>
			<p>
				<a href='/'>home</a>
				|
				<a href="imagespin">spin an image</a>
				|
				<a href="tompscanlan">Tom Scanlan</a>
			</p>
		</footer>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;800&display=swap');

	.center {
		margin: auto;
		width: 50%;
		/*border: 3px solid green;*/
		padding: 10px;
	}
	.center-text {
		text-align: center;
		/*border: 3px solid blue;*/
	}

	body,
	html {
		margin: 0;
		font-size: 100%;
		font-family: 'Manrope', sans-serif;
		color: #d7d2cb;
		cursor: none;
	}

	body {
		background-color: #d7d2cb;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		scrollbar-width: none;
	}
</style>
