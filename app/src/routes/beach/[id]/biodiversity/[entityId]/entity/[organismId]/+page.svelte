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
	<h2 class="title"> {individual.name}</h2>
	<h2 class="subtitle"> {individual.scientific_name}</h2>
	<Block outlineIos class="space-y-2">
		<div>
			<img src={`/playas/${individual.image}`} alt="imagen" />
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
			Estado de conservación IUCN:
		</div>
	</Block>

	<Block>
		<p>{STATES_CONSERVATION[individual.conservation_status].text}</p>
	</Block>
	<Block outlineIos class="space-y-2 text-center" >
		<Block class="grid grid-cols-3 gap-x-8 gap-y-3 oval-container">
			{#each Object.entries(STATES_CONSERVATION) as [c, s], i}
				<StateIucn 
					color={s.color} 
					text={c} 
					active={c == individual.conservation_status }  />
			{/each}
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
