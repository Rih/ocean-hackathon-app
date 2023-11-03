<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });
</script>

<Page>
	<Block>
		<h2 class="title">{beach.title}</h2>
	</Block>
	<Block>
		<p>{beach.region}</p>
	</Block>

	<Block>
		<p class="subtitle">{beach.details}</p>
	</Block>
	¿Qué quieres saber?

	<Block>
		<Button onClick={() => goRoute('beach_bio_index', { id })}>Conocer la biodiversidad</Button>
	</Block>
	<Block>
		<Button onClick={() => goRoute('beach_contamination', { id })}
			>Conocer el estado de contaminación</Button
		>
	</Block>
	<Block>
		<Button onClick={() => goRoute('beach_report', { id })}>Hacer una denuncia</Button>
	</Block>
	<Footer />
</Page>


<style>
	.title{
		margin-top: 4.5rem;
		font-size: 2rem;
	}
	.subtitle {
		font-size: 1.8rem;
		text-align: center;
		color: black;
		line-height: 1.5;
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #B6D7A8;
	}
</style>