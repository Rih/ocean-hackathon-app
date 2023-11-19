<script lang="ts">
	import { Block, Button, Dialog, DialogButton, Link, List, ListInput, ListItem, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import Title from '$lib/components/Title.svelte';
	import { goRoute } from '@utils/routes';
	import Emoji from '$lib/components/Emoji.svelte';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;
	let confirmOpened: boolean = false;
	let commentOpened: boolean = false;
	let name = { value: '', changed: false };
	let demoValue = '';

	const onNameChange = (e: any) => {
		name = { value: e.target.value, changed: true };
	};
	const emotions = [
		{ name: 'sad', text: 'Con tristeza e impotencia' },
		{ name: 'worried', text: 'Preocupado/a' },
		{ name: 'poker', text: 'Indiferente' },
		{ name: 'quiet', text: 'Tranquilo/a' },
		{ name: 'smile', text: 'Optimista' }
	];
	console.log({ id });
</script>

<Page>
	<Title title="¿Sabes qué es la Eco-ansiedad?" />
	<Block outlineIos class="space-y-2">
		<div class="">
			<p class="subtitle">
				La eco-ansiedad es una respuesta común a la crisis ambiental. Se gatilla al observar
				desastres ambientales o espacios de uso común muy contaminados, entre otros motivos. La
				ecoansiedad se manifiesta como preocupación, pesimismo, tristeza, miedo e impotencia. Es una
				reacción esperable ante el inevitable cambio climático de origen antropogénico. Al hablar
				abiertamente sobre la eco ansiedad, podemos abordar mejor la crisis ambiental y trabajar
				juntos para proteger nuestro entorno natural.
			</p>
		</div>
	</Block>
	<Block>
		<div class="">
			<p>
				Selecciona aquí la categoría que más representa tu sensación durante esta visita a la playa:
			</p>
		</div>
	</Block>
	<Block>
		<List>
			{#each emotions as { name, text } (name)}
				<ListItem>
					<Link class="emojis" onClick={() => (confirmOpened = true)}>
						<Emoji {name} /><span class="">{text}</span>
					</Link>
				</ListItem>
			{/each}
		</List>
	</Block>
	<Block>
		<Button onClick={() => goRoute('beach_evaluation', { id })}
			>Ver lo que opinaron los demás</Button
		>
	</Block>
	<Block>
		<Button onClick={() => commentOpened = true }
			>Deja una opinión o comentario</Button
		>
	</Block>
	<Dialog opened={confirmOpened} onBackdropClick={() => (confirmOpened = false)}>
		<svelte:fragment slot="title">Valoración</svelte:fragment>
		¡Gracias por tu valoración!
		<svelte:fragment slot="buttons">
			<DialogButton strong onClick={() => (confirmOpened = false)}>Cerrar</DialogButton>
		</svelte:fragment>
	</Dialog>

	<Dialog opened={commentOpened} onBackdropClick={() => (commentOpened = false)}>
		<svelte:fragment slot="title">Coméntanos</svelte:fragment>
		<List>
		<ListInput
				label="Comentarios"
				type="text"
				placeholder="Tus comentarios"
				info="Coméntamos aqui sobre tu visita"
				value={name.value}
				error={name.changed && !name.value.trim() ? 'El comentario es requerido' : ''}
				onInput={onNameChange}
			/>
		</List>
		<svelte:fragment slot="buttons">
			<DialogButton strong onClick={() => (goRoute('beach_forum', { id }))}>Comentar</DialogButton>
			<DialogButton strong onClick={() => (commentOpened = false)}>Cerrar</DialogButton>
		</svelte:fragment>
	</Dialog>
	<Footer />
</Page>

<style>
	.emojis {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.subtitle {
		font-size: 22px;
		text-align: justify;
		line-height: 1.5;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	.source {
		font-style: italic;
		font-weight: 700;
	}
</style>
