<script lang="ts">
	import { Block, Button, Link, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });
</script>

<Page>
	<Title title="Gracias por tu feedback!" />
	<Block outlineIos class="space-y-2">
		<p class="" style="text-align: justify">
			La construcción de nuestros índices de contaminación se basan en metodología publicada y
			validada (ver fuentes al pie) que usa datos rigurosamente levantados por distintas iniciativas
			de ciencia ciudadana. Así, los índices permiten comparar estandarizadamente el estado de las
			playas.
		</p>
	</Block>

	<Block outlineIos class="space-y-2">
		<p class="" style="text-align: justify">
			Si quieres actualizar los semáforos de contaminación puedes ponerte en contacto con nosotros
			para organizar un muestreo estandarizado y subir tus resultados a nuestra base de datos. Para
			esto escríbenos a <b>vamosalaplaya@winners.com</b>
		</p>
	</Block>
	<Block outlineIos class="space-y-2">
		<p>
			También puedes organizar un limpieza de playa colaborativa simple aquí: 
		</p>
		<Button onClick={() => goRoute('beach_contamination_schedule', {id})}>
			Agendar limpieza
		</Button>
	</Block>

	<Footer />
</Page>

<style>
	.subtitle {
		font-size: 1.8rem;
		text-align: center;
		color: black;
		line-height: 1.5;
		padding-top: 3rem;
		text-align: justify;
		padding-bottom: 3rem;
	}
	.source {
		font-style: italic;
		font-weight: 700;
	}
</style>
