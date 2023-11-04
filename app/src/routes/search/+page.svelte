<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES, type Beach } from '$lib/data';
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

	let searchQuery = '';
	let focused: boolean = false;
	const beaches: Beach[] = BEACHES;

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
	/* eslint-disable */
	$: {
		filteredItems = searchQuery
			? beaches.filter((item: Beach) =>
					item.title.toLowerCase().includes(searchQuery.toLowerCase())
			  )
			: /*focused
			? beaches
			: */ [];
	}
</script>

<Page>
	<h1 class="title">¿Qué playa quieres visitar hoy?</h1>
	<Navbar title="Escribe el nombre de la playa acá...">
		<Searchbar
			slot="subnavbar"
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

	<List strong insetMaterial outlineIos>
		<span>Listado de playas:</span>
		{#each filteredItems as item (item.id)}
			<ListItem link title={item.title} touchRipple onClick={() => onBeachSelected(item.id)} />
		{:else}
			<ListItem title="Sin resultados" />
		{/each}
	</List>
	<Block>
		<Button onClick={() => goRoute('manual', {})}>Manual de buenas prácticas</Button>
	</Block>
	<Footer />
</Page>

<style>
	.title {
		margin-top: 5rem;
		text-align: center;
		font-size: 1.5rem;
	}
	span {
		padding: 3px;
		margin-left: 14px;
		line-height: 3.2;
	}
</style>
