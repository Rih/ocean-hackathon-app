<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Map from '$lib/components/Map.svelte';
	import Title from '$lib/components/Title.svelte';
	import { BEACHES } from '$lib/data';
	import type { Beach } from '$lib/data/beach';
	import { BeachService } from '$lib/services/BeachService';
	import { goBack, goRoute } from '@utils/routes';
	import {
		Block,
		BlockFooter,
		Button,
		Link,
		List,
		ListButton,
		ListItem,
		Navbar,
		Page,
		Searchbar
	} from 'konsta/svelte';
	import { getContext, onMount } from 'svelte';

	const { navigateState } = getContext<any>('navigateStore');
	let searchQuery = '';
	let focused: boolean = false;
	let beaches: Beach[] = [];

	const handleSearch = (e) => {
		searchQuery = e.target.value;
	};

	const handleClear = () => {
		searchQuery = '';
	};

	const handleDisable = () => {
		console.log('Disable');
	};

	const handleFocus = () => {
		focused = true;
	};
	const handleBlur = () => {
		focused = false;
	};

	const onBeachSelected = (id: number) => {
		goRoute('beach_index', { id });
	};

	let filteredItems: Beach[] = [];
	const service = new BeachService();
	onMount(async () => {
		navigateState.setLoading(true);
		const items = await service.fetchData({}, 1);
		navigateState.setLoading(false);
		beaches = items.data;
	});
	/* eslint-disable */
	$: {
		filteredItems = searchQuery
			? beaches.filter((item: Beach) =>
					item.title.toLowerCase().includes(searchQuery.toLowerCase())
			  )
			: beaches;
	}
</script>

<Page>
	<Title title="" />
	<Block>
		<Navbar title="Buscador de Playas">
			<Searchbar
				slot="subnavbar"
				label="Buscar"
				placeholder="Escribe el nombre de la playa acá..."
				onInput={handleSearch}
				value={searchQuery}
				onClear={handleClear}
				onFocus={handleFocus}
				onBlur={handleBlur}
				disableButton
				disableButtonText="Cancel"
				onDisable={handleDisable}
			/>
		</Navbar>
	</Block>
	<List strong insetMaterial outlineIos>
		<!-- <span>Listado de playas:</span> -->
		{#each filteredItems as item (item.id)}
			<ListItem link title={item.title} touchRipple onClick={() => onBeachSelected(item.id)} />
		{:else}
			<ListItem title="Sin resultados" />
		{/each}
	</List>
	<Loader />
	<Block>
		<div class="container">
			<p>O también puedes navegar en el mapa aquí...</p>
		</div>
		<Map />
	</Block>
	<Block>
		<Button onClick={() => goRoute('manual', {})}>Manual de buenas prácticas</Button>
	</Block>
	<Footer />
</Page>

<style>
	span {
		padding: 3px;
		margin-left: 14px;
		line-height: 3.2;
	}
</style>
