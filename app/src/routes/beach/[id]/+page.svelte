<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';
	import AppGallery from '$lib/components/AppGallery.svelte';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });
</script>

<Page>
	<Title title={beach.title} justify="left" />
	<Block>
		<AppGallery imageSrc={beach.img} imageAlt={`imagen de ${beach.title}`}  />
	</Block>
	<Block>
		<div class="">
			<p>{beach.region}</p>
		</div>
	</Block>

	<Block>
		<div class="">
			<p class="subtitle">{beach.details}</p>
		</div>
	</Block>
	
	<Block>
		<div class="">
			<span>¿Qué quieres saber?</span>
		</div>
	</Block>

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
	
	span{
		font-size: 22px;
		padding: 4px;
		margin-top: 3px;
		margin-bottom: 3px;
	}
	.subtitle {
		font-size: 22px;
		text-align: justify;
		line-height: 1.5;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
</style>