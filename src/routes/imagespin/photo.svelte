<script>
	let fileInput;
	let files;
	let avatar;
	let speed = 42;

	let image;

	import { fly } from 'svelte/transition';

	function rotateBase64Image(base64data) {
		let image = new Image();
		image.src = base64data;
	}

	function getBase64(image) {
		const reader = new FileReader();

		reader.readAsDataURL(image);

		reader.onload = (e) => {
			avatar = e.target.result;
			rotateBase64Image(image);
		};
	}
</script>

<div class="container">
	<div class="vertical-center">
		{#if avatar}

			<img
				bind:this={image}
				transition:fly={{ y: -200, duration: 2000 }}
				class="avatar"
				src={avatar}
				alt="avatar"
			/>


		{:else}
			<img
				class="avatar"
				src="https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer-thumbnail.png"
				alt="avatar"
			/>
		{/if}
	</div>
	<div>
		<input
			class="hidden"
			id="file-to-upload"
			type="file"
			accept=".png,.jpg"
			bind:files
			bind:this={fileInput}
			on:change={() => getBase64(files[0])}
		/>
		<button class="upload-btn" on:click={() => fileInput.click()}>Upload</button>

		<input type="range" bind:value={speed} />
		<p>speed: {speed}</p>

		<!--  	<button class="rotate-btn" on:click={ () => rotateBase64Image(avatar, callback()) }>Rotate</button>-->
	</div>
</div>

<style>
	.vertical-center {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.container {
		height: 200px;
		position: relative;
		border: 3px solid green;
	}

	.avatar {
		width: 800px;
		/*margin-bottom: 10px;*/
	}

	.hidden {
		display: none;
	}
	.upload-btn:hover {
		background-color: white;
		color: black;
		outline: black solid 2px;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
