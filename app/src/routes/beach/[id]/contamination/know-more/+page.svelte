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
	<Title title="Construcción de los índices y escalas de interpretación2" />
	<Block outlineIos class="space-y-2">
		<p class="subtitle">
			En la construcción de los índices, se emplearon dos enfoques distintos. El primero evalúa la
			contaminación por plástico al calcular el cociente del plástico total entre el área estudiada.
			El segundo enfoque mide la peligrosidad al calcular el cociente del plástico total entre los
			metales y vidrios potencialmente peligrosos y el área en cuestión.
		</p>
	</Block>
	<Block>
		<img src="/contamination_knowmore1.png" alt="formula indice CCI" />
	</Block>
	<Block>
		<img src="/contamination_knowmore2.png" alt="formula indice HABLI" />
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
		padding-bottom: 3rem;
		background-color: #b6d7a8;
	}
	.source {
		font-style: italic;
		font-weight: 700;
	}
</style>
