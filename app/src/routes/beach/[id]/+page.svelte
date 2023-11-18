<script lang="ts">
	import { Actions, ActionsButton, ActionsGroup, ActionsLabel, Block, Button, Fab, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Emoji from '$lib/components/Emoji.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;
	let actionsOneOpened:boolean = false;
	console.log({ id });
</script>

<Page>
	<Title title={beach.title} justify="left" />
	<Block>
		<img src={beach.img} alt={`imagen de ${beach.title}`} />
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
		<span style="font-size: 20px">Valoración promedio de los usuarios:</span>
	</Block>
	<Block>
		<div class="text-center">
			<Emoji name={beach.average_valuated} />
		</div>
	</Block>
	<Block>
		<Fab
			class="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
			text="¿Qué quieres hacer?"
			textPosition="after"
			onClick={() => actionsOneOpened = true}
		>
			<svelte:component this={PlusOutline} slot="icon" />
			<span />
		</Fab>
	</Block>

	
	<Actions opened={actionsOneOpened} onBackdropClick={() => (actionsOneOpened = false)}>
		<ActionsGroup>
			<ActionsLabel>Acciones para {beach.title}</ActionsLabel>
			<ActionsButton onClick={() => goRoute('beach_bio_index', { id })} bold>
				Conocer la biodiversidad
			</ActionsButton>
			<ActionsButton onClick={() => (goRoute('beach_contamination', { id }))} bold>
				Conocer el estado de contaminación
			</ActionsButton>
			<ActionsButton onClick={() => (goRoute('beach_report', { id }))} bold>Hacer una denuncia</ActionsButton>
			<ActionsButton onClick={() => (actionsOneOpened = false)}>Cerrar</ActionsButton>
		</ActionsGroup>
	</Actions>
	<Footer />
</Page>

<style>
	span {
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
