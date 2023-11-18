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
	<Title title="Acceso bloqueado" justify="left" />
	<Block outlineIos class="space-y-2">
		<p class="subtitle">
			La ley chilena concede a todas las personas que estén en Chile el derecho a acceder a playas
			de mar o lago, desembocaduras de ríos, cascadas o glaciares
		</p>
	</Block>
	<Block>
		<p>
			Si ves que el acceso peatonal a la playa está bloqueado, están controlando el acceso, o están
			cobrando por ingresar, haz tu denuncia a través de los canales oficiales del Ministerio de
			Bienes Nacionales haciendo click acá:
		</p>

		<Link component="a" href="https://idembn.bienes.cl/fcp/web-form/65" target="_blank">
			https://idembn.bienes.cl/fcp/web-form/65
		</Link>
	</Block>
	<Block outlineIos class="space-y-2">
		Fuente: <span class="source">Código Civil Artículo 589, Decreto Ley 1.939 Artículo 13</span>
	</Block>

	<Footer />
</Page>

<style>
	.subtitle {
		font-size: 1.8rem;
		text-align: justify;
		color: black;
		line-height: 1.5;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	.source {
		font-style: italic;
		font-weight: 700;
	}
</style>
