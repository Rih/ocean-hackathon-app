<script lang="ts">
	import {
		Block,
		BlockTitle,
		Chip,
		Button,
		Fab,
		List,
		ListItem,
		Toolbar,
		Page,
		Link,
		Icon,
		Searchbar,
		Navbar
	} from 'konsta/svelte';
	import { page } from '$app/stores';
	import EntityItem from '$lib/components/EntityItem.svelte';
	import { BEACHES, CATALOG, ENTITIES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import { PlusOutline, RedoOutline, AdjustmentsHorizontalOutline, CloseOutline } from 'flowbite-svelte-icons';
	import { CATEGORIES, CATEGORY_FAUNA, CATEGORY_FLORA } from '$lib/data/category';
	import type { Entity } from '$lib/data/entity';
	import type { Catalog } from '$lib/data/catalog';
	import { getContext } from 'svelte';
	import type { BiodiversityStore } from '$lib/store/biodiversity/biodiversity';
	import AppCard from '$lib/components/AppCard.svelte';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });
	const { biodiversityState } = getContext<any>('biodiversityStore');
	let showFilter: boolean = false;
	let searchQuery = '';
	let focused: boolean = false;
	let entityId: number = 0;
	let entityName: string = 'Todos';
	let entities: Entity[] = ENTITIES;
	let subs = biodiversityState.subscribe((value: BiodiversityStore) => {
		showFilter = value.showFilter;
		searchQuery = value.name;
		entityId = value.entityId;
		entities = value.entities;
		entityName =
			entityId == 0 ? 'Todos' : Object.values(ENTITIES).find((c) => entityId === c.id)?.name!;
	});

	
	const handleSearch = (e: any) => {
		biodiversityState.setName(e.target.value);
	};

	const handleClear = () => {
		biodiversityState.setName('');
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


	const onEntitySelected = (entityId: number) => {
		biodiversityState.setEntity(entityId);
		biodiversityState.setEntities(entityId);
	};

	const catalogs = CATALOG.filter((e) => (!entityId || e.entityId == entityId) && e.beachId == id);
	const dataEntitiesCatalog: Catalog[] = catalogs;
	const setCatalogName = (id: number) => {
			const name = Object.values(CATALOG).find( (c) => c.id == id)!.name
			return name;

	}
</script>

<Page>
	{#if showFilter}
		<Block class="space-y-10">
			<Block>
				<BlockTitle>
					<b>Conoce tu flora y fauna</b>
				</BlockTitle>
				<Block>
					<Navbar
					  	outline translucent transparent
					>
						<Searchbar
							slot="subnavbar"
							placeholder="Busca aqui..."
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
				<span>Seleccionado: <b>{entityName}</b></span>
				<List strongIos outlineIos>
					{#each entities as { id, name } (name)}
						<ListItem onClick={() => onEntitySelected(id)} touchRipple>
							<EntityItem active={entityId === id} {name} />
						</ListItem>
					{/each}
				</List>
			</Block>
			<Block>
				<div class="grid grid-cols-2 gap-x-4">
					<Button clear class="k-color-brand-green" onClick={() => biodiversityState.resetFilters() }>
						<Link touchRipple navbar>
							<Icon badgeColors={{ bg: 'bg-red-500' }}>
								<RedoOutline />
							</Icon>
						</Link>
						Restablecer
					</Button>
					<Button
					 	clear
						onClick={() => biodiversityState.toggleFilter()}
					>
						<Link touchRipple navbar>
							<Icon badgeColors={{ bg: 'bg-red-500' }}>
								<CloseOutline />
							</Icon>
						</Link>
						Cerrar filtro
					</Button>
				</div>
			</Block>
		</Block>
	{:else}
		<Fab
			class="fixed right-4-safe ios:top-15-safe material:top-18-safe z-20 k-color-brand-red"
			text="Filtros"
			textPosition="after"
			onClick={() => biodiversityState.toggleFilter()}
		>
			<svelte:component this={AdjustmentsHorizontalOutline} slot="icon" />
		</Fab>
	{/if}


	<Block>
		{#each dataEntitiesCatalog as row}
			<Block outlineIos class="space-y-2">
				<AppCard 
					routeName=""
					title={
						CATEGORIES.find(c => c.id == Object.values(ENTITIES).find(e => e.id == row.entityId)?.categoryId)?.text
					} 
					beachId={row.beachId}
					entityId={row.entityId}
					organismId={row.id}
					description={row.details.substring(0, 100)}
					imageUrl={row.image} />
			</Block>
		{/each}
	</Block>
	<!-- <Fab
		class="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
		text="Ingresar registro"
		textPosition="after"
		onClick={() => goRoute('beach_bio_form', { id })}
	>
		<svelte:component this={PlusOutline} slot="icon" />
	</Fab> -->
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
