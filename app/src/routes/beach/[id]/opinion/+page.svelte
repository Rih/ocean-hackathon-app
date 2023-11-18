<script lang="ts">
	import { Block, Button, Link, List, ListInput, ListItem, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import { BEACHES, CATEGORIES } from '$lib/data';
	import Title from '$lib/components/Title.svelte';
	import { goRoute } from '@utils/routes';
	import Chart from '$lib/components/Chart.svelte';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });

    const emotions = [
		{ name: 'sad', text: 'Con tristeza e impotencia' },
		{ name: 'worried', text: 'Preocupado/a' },
		{ name: 'poker', text: 'Indiferente' },
		{ name: 'quiet', text: 'Tranquilo/a' },
		{ name: 'smile', text: 'Optimista' }
	];
</script>

<Page>
	<Title title={`Valorizaciones de las visitas a la playa ${beach.title}`} justify="left" />
	<Block>
		<Chart />
	</Block>
	
</Page>


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