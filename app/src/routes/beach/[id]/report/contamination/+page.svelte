<script lang="ts">
	import { Block, Button, Link, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data.ts';
	import { goRoute } from '@utils/routes';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });
</script>

<Page>
	<h2 class="title">Contaminación</h2>
	<Block outlineIos class="space-y-2">
		<p class="subtitle">
			La ley chilena prohibe el vertimiento o deposición de cualquier tipo de contaminante al suelo,
			aire, y agua. Se entiende por contaminante todo compuesto cuya presencia pueda ser riesgosa
			para la salud de las personas y de la naturaleza
		</p>
	</Block>
	<Block>
		<p>
			Si ves a una o más personas contaminando la playa, haz tu denuncia a través de los canales
			oficiales de Carabineros de Chile haciendo click acá:
		</p>

		<Link component="a" href="https://www.comisariavirtual.cl/" target="_blank">
			https://www.comisariavirtual.cl/
		</Link>
	</Block>
	<Block>
		<p>También puedes llamar al:</p>

		<Link component="a" href="tel:133" target="_blank">133</Link>
	</Block>
	<Block>
		<p>O acercarte a la comisaría o retén más cercano.</p>
	</Block>
	<Block outlineIos class="space-y-2">
		Fuente: <span class="source">Código Penal Artículo 308 Y 494 , Ley 19.300, Ley 19.419</span>
	</Block>

	<Footer />
</Page>

<style>
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
