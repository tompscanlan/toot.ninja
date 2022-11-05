<script>
	let fileInput;
	let files;
	let avatar;

	function callback(base64data) {
		console.log(base64data);
	}

	function rotateBase64Image(base64data, callback) {
		var canvas = document.getElementById("c");
		var ctx = canvas.getContext("2d");

		var image = new Image();
		image.src = base64data;
		// image.onload = function() {
		// 	ctx.translate(image.width, image.height)
		// 	// ctx.translate(100, 100);
		// 	// ctx.translate(image.width );image.
		// 	ctx.rotate(180 * Math.PI / 180);
		// 	ctx.drawImage(image, 0, 0);
		// 	window.eval(""+callback+"('"+canvas.toDataURL()+"')");
		// };

	}

	function getBase64(image) {
		const reader = new FileReader();

		reader.readAsDataURL(image);

		console.log("got image: " + image);
		reader.onload = e => {
			avatar = e.target.result;
			rotateBase64Image(image, callback());
		};
	}

	async function uploadFunction(imgBase64) {
		const data = {}
		const imgData = imgBase64.split(',');
		data["image"] = imgData[1];
		console.log(data);
		await fetch(`/upload`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(data)
		});
	}
</script>

<div class="container">
	{#if avatar}
		<img class='avatar' id="avatar" src={avatar} alt="avatar"/>
		<canvas id="c"/>
	{:else}
		<img id="avatar" src="avatar.png" alt="avatar"/>
	{/if}
	<input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>

		<button class="upload-btn" on:click={ () => fileInput.click() }>Upload</button>
<!--  	<button class="rotate-btn" on:click={ () => rotateBase64Image(avatar, callback()) }>Rotate</button>-->

</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #avatar {
        /*border-radius: 99999px;*/
        /*height: 128px;*/
        width: 800px;
        margin-bottom: 10px;
    }

    .hidden {
        display: none;
    }

    .upload-btn {
        width: 128px;
        height: 32px;
        background-color: black;
        font-family: sans-serif;
        color: white;
        font-weight: bold;
        border: none;
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

    img.avatar {
        animation-name: rotate;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
</style>
