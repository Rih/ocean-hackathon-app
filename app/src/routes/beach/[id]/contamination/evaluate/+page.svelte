<script lang="ts">
	import { Block, Button, Dialog,
    DialogButton, Link, List, ListItem, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import Title from '$lib/components/Title.svelte';
	import { goRoute } from '@utils/routes';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;
	let confirmOpened: boolean = false;

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
		<p class="subtitle">
			La eco-ansiedad es una respuesta común a la crisis ambiental que se gatilla al observar
			desastres ambientales, o ver espacios de uso común muy contaminados, entre otros motivos. La
			eco-ansiedad se puede manifestar como preocupación, pesimismo, tristeza, miedo e impotencia.
			Es una reacción esperable ante el inevitable cambio climático de origen antropogénico. Puede
			motivar a las personas a tomar medidas proambientales, como adoptar un estilo de vida
			sostenible, apoyar políticas de conservación, o tomar medidas locales de descontaminación. Al
			hablar abiertamente sobre la eco ansiedad, podemos abordar mejor la crisis ambiental y
			trabajar juntos para proteger nuestro entorno natural.
		</p>
	</Block>
	<Block>
		<p>
			Selecciona aquí la categoría que más representa tu sensación durante esta visita a la playa:
		</p>
	</Block>
	<Block>
		<List>
			{#each emotions as { name, text } (name)}
				<ListItem>
					<Link onClick={() => confirmOpened = true }>
						<i class={`emoji ${name}`} />{text}
					</Link>
				</ListItem>
			{/each}
		</List>
	</Block>
	<Block>
		<Button onClick={() => goRoute('beach_evaluation', {id})}>Ver lo que opinaron los demás</Button>
	</Block>
	<Dialog
		opened={confirmOpened}
		onBackdropClick={() => (confirmOpened = false)}
	>
		<svelte:fragment slot="title">Valoración</svelte:fragment>
			¡Gracias por tu valoración!
		<svelte:fragment slot="buttons">
		<DialogButton strong onClick={() => (confirmOpened = false)}>
			Cerrar
		</DialogButton>
		</svelte:fragment>
	</Dialog>
	<Footer />
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
	
	.subtitle {
		font-size: 1.8rem;
		text-align: center;
		color: black;
		line-height: 1.5;
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #b6d7a8;
	}
	.source {
		font-style: italic;
		font-weight: 700;
	}
</style>
