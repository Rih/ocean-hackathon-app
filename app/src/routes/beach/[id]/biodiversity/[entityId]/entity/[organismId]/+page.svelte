<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES, CATALOG } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import StateIucn from '$lib/components/StateIUCN.svelte';
	import { COLORS, type Color } from "$lib";
	import { STATES_CONSERVATION } from '$lib/data/catalog';

    const id = Number($page.params.id);
	const entityId = Number($page.params.entityId);
	const organismId = Number($page.params.organismId);
    const individual = CATALOG.find((b) => b.id == organismId)!;
	console.log({ id });
</script>

<Page>
	<Block>
		<p class="title"> {individual.name}</p>
		<h2 class="subtitle"> {individual.scientific_name}</h2>
	</Block>
	
	<Block outlineIos class="space-y-2">
		<div>
			<img src={`${individual.image}`} alt={`imagen de ${individual.name}`} />
			Autor: {individual.author}
		</div>
	</Block>
	<Block outlineIos class="space-y-2">
		
		<div>
			<p style="text-align: justify">
				{individual.details}
			</p>
		</div>
		
	</Block>
	<Block outlineIos class="space-y-2">
		<div>
			<p style="text-align: justify">
				Estado de conservación:
			</p>
		</div>
	</Block>

	<Block>
		<p style="font-size: 28px">{STATES_CONSERVATION[individual.conservation_status].text}</p>
	</Block>
	
	<Block outlineIos class="space-y-2 text-center" >
		<Block class="grid grid-cols-2 gap-x-2 gap-y-3 oval-container">
			<div>
				<p>Sigla IUCN:</p>
			</div>
			<div>
				<StateIucn 
				color={STATES_CONSERVATION[individual.conservation_status].color} 
				text={individual.conservation_status} 
				active={true }  />
			</div>
				
		</Block>
		
	</Block>

	<Footer />
</Page>

<style>
	.oval-container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.title {
		margin-top: 4.5rem;
		font-size: 2rem;
		padding: 5px;
	}
	.subtitle {
		font-size: 14px;
		padding: 5px;
		font-style: italic;
		color: black;
		line-height: 1.5;
	}
</style>
