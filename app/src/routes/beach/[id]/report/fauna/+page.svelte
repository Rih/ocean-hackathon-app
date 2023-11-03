<script lang="ts">
	import { Block, Button, Link, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });
</script>

<Page>
	<h2 class="title">Maltrato de fauna silvestre</h2>
	<Block outlineIos class="space-y-2">
		<p class="subtitle">
			La ley chilena prohibe cualquier acto de maltrato o crueldad que genera daño, dolor o
			sufrimiento a un animal.
		</p>
	</Block>
	<Block>
		<p>
			Si ves a una o más personas dañando o molestando a un animal silvestre haz tu denuncia a
			través de los canales oficiales del Servicio Nacional de Pesca y Acuicultura (<b>SERNAPESCA</b>)
			haciendo click acá:
		</p>

		<Link component="a" href="http://www.sernapesca.cl/sistema-integral-de-informacion-y-atencion-ciudadana-siac" target="_blank">
			http://www.sernapesca.cl/sistema-integral-de-informacion-y-atencion-ciudadana-siac
		</Link>
	</Block>
	<Block>
		<p>También puedes llamar a la línea gratuita:</p>

		<Link component="a" href="tel:800320032" target="_blank">800 320 032</Link>
	</Block>
	<Block>
		<p>O acercarte a la oficina de SERNAPESCA más cercana.</p>
	</Block>
	<Block outlineIos class="space-y-2">
		Fuente: <span class="source">Ley 20.380, Código Penal Artículo 291 bis.</span>
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
