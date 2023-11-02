<script lang="ts">
	import { goBack, goRoute } from '@utils/routes';
	import {
		Block,
		BlockFooter,
		Button,
		List,
		ListItem,
		Navbar,
		Page,
		Searchbar
	} from 'konsta/svelte';

	interface Beach {
		id: number;
		title: string;
	}

	let searchQuery = '';
	let focused: boolean = false;
	const beaches: Beach[] = [
		{ id: 1, title: 'FC Ajax' },
		{ id: 2, title: 'FC Arsenal' },
		{ id: 3, title: 'FC Athletic' },
		{ id: 4, title: 'FC Barcelona' },
		{ id: 5, title: 'FC Bayern München' },
		{ id: 6, title: 'FC Bordeaux' },
		{ id: 7, title: 'FC Borussia Dortmund' },
		{ id: 8, title: 'FC Chelsea' },
		{ id: 9, title: 'FC Galatasaray' },
		{ id: 10, title: 'FC Juventus' },
		{ id: 11, title: 'FC Liverpool' },
		{ id: 12, title: 'FC Manchester City' },
		{ id: 13, title: 'FC Manchester United' },
		{ id: 14, title: 'FC Paris Saint-Germain' },
		{ id: 15, title: 'FC Real Madrid' },
		{ id: 16, title: 'FC Tottenham Hotspur' },
		{ id: 17, title: 'FC Valencia' },
		{ id: 18, title: 'FC West Ham United' }
	];

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

	let filteredItems: Beach[] = [];
	/* eslint-disable */
	$: {
		filteredItems = searchQuery
			? beaches.filter((item: Beach) =>
					item.title.toLowerCase().includes(searchQuery.toLowerCase())
			  )
			: focused
			? beaches
			: [];
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
		{#if filteredItems.length === 0}
			<ListItem title="Sin resultados" />
		{/if}
		{#each filteredItems as item (item.title)}
			<ListItem title={item.title} touchRipple />
		{/each}
	</List>
	<Block>
		<BlockFooter>
			<Button onClick={() => goRoute('manual')}>Manual de buenas prácticas</Button>
			<Button onClick={goBack}>Volver</Button>
		</BlockFooter>
	</Block>
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
