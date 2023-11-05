<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
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
	<Title title={`Estado de contaminación de playa ${beach.title}`} justify="left" />
	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-2 gap-x-8">
			<div>
				<img src="semap" alt="semaforo" />
			</div>
			<div>
				Índice de plástico {beach.plastic_index}
			</div>
		</div>
	</Block>
	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-2 gap-x-8">
			<div>
				<img src="semap" alt="semaforo" />
			</div>
			<div>
				Índice de peligrosidad {beach.danger_index}
			</div>
		</div>
	</Block>

	<Block>
		<p>Recomendaciones a tomar debido al resultados de los dos índices.</p>
	</Block>
	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-2 gap-x-4">
			<div>
				<Button
					class="font-bold"
					onClick={() => goRoute('beach_contamination_evaluate', { id })}
					large
					outline>Evalúa tu playa</Button
				>
			</div>
			<div>
				<Button
					class="font-bold"
					onClick={() => goRoute('beach_contamination_knowmore', { id })}
					large
					outline>Saber más</Button
				>
			</div>
		</div>
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
</style>
