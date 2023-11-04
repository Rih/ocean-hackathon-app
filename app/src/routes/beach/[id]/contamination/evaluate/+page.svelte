<script lang="ts">
	import { Block, Button, Link, List, ListItem, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

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
	<h2 class="title">¿Sabes qué es la Eco-ansiedad?</h2>
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
					<Link onClick={() => console.log(name)}>
						<i class={`emoji ${name}`} />{text}
					</Link>
				</ListItem>
			{/each}
		</List>
	</Block>

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
	.title {
		margin-top: 4.5rem;
		font-size: 2rem;
		text-align: center;
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
