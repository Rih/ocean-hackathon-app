<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES, CATALOG } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import StateIucn from '$lib/components/StateIUCN.svelte';
	import { COLORS, type Color } from "$lib";

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
			<img src={individual.image} alt="imagen" />
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
		<p>Casi amenazado</p>
	</Block>
	<Block outlineIos class="space-y-2 text-center" >
		<Block class="grid grid-cols-4 gap-x-8 oval-container">
			<StateIucn color={COLORS.GRAY} text="DD"  />
			<StateIucn color={COLORS.GREEN} text="LC"  />
			<StateIucn color={COLORS.LIGHTYELLOW} text="CA" active />
			<StateIucn color={COLORS.ORANGE} text="VU"  />
			
		</Block>
		<Block class="grid grid-cols-4 gap-x-8 oval-container">

			<StateIucn color={COLORS.LIGHTRED} text="EN"  />
			<StateIucn color={COLORS.RED} text="CR"  />
			<StateIucn color={COLORS.VIOLET} text="EW"  />
			<StateIucn color={COLORS.BLACK} text="EX"  />
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
