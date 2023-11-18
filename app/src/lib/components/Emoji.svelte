<script lang="ts">
    export let name: string;
</script>

<i class={`emoji ${name}`} />


<style>
    .emoji {
		font-style: unset;
		font-size: 2rem;
		width: 50px;
		height: 50px;
	}
	.sad::before {
		content: '\1F625';
	}
	.worried::before {
		content: '\1F61F';
	}
	.poker::before {
		content: '\1F610';
	}
	.quiet::before {
		content: '\1F642';
	}
	.smile::before {
		content: '\1F601';
	}
</style>