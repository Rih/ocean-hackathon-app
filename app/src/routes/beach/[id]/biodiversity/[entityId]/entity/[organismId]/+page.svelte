<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES, CATALOG } from '$lib/data';
	import { goRoute } from '@utils/routes';

    const id = Number($page.params.id);
	const entityId = Number($page.params.entityId);
	const organismId = Number($page.params.organismId);
    const individual = CATALOG.find((b) => b.id == organismId)!;
	console.log({ id });
</script>

<Page>
	<h2 class="title"> {individual.name}</h2>
	<h2 class="title"> {individual.scientific_name}</h2>
	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-2 gap-x-8">
			<div>
				<p>
                    {individual.details}
                </p>
			</div>
			<div>
				<img src={individual.image} alt="imagen" />
			</div>
		</div>
	</Block>
	<Block outlineIos class="space-y-2">
			<div>
				Estado de conservación IUCN:
			</div>
	</Block>

	<Block>
		<p>Casi amenazado</p>
	</Block>
	<Block outlineIos class="space-y-2">
		Las siglas con los colores aqui!!
	</Block>

	<Footer />
</Page>

<style>
	.title {
		margin-top: 4.5rem;
		font-size: 2rem;
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
</style>
