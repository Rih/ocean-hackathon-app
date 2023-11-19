import { CATALOG, type Catalog } from '$lib/data/catalog';
import { ENTITIES, type Entity } from '$lib/data/entity';
import { writable } from 'svelte/store';


export interface BioFilters {
	showFilter: boolean;
	entityId: number | null;
	name: string;
	entities: Entity[];
}

export interface BiodiversityStore {
	showFilter: boolean;
	entityId: number;
	name: string;
	loading: boolean;
	entities: Entity[];
	catalog: Catalog[];
}

const FILTER_INIT: BiodiversityStore = {
	showFilter: false,
	entityId: 0,
	name: '',
	loading: false,
	entities: ENTITIES,
	catalog: [],
};

const { subscribe, set, update } = writable(FILTER_INIT);


const toggleFilter = () => update((state) => {
	return {
		...state,
		showFilter: !state.showFilter,
	}
})
const resetFilters = () => update((state) => {
	const entities = [...ENTITIES];
	return {
		...state,
		...FILTER_INIT,
		entities,
	}
});
const setEntity = (entityId: number = 0) =>
	update((state) => {
		return {
			...state,
			entityId,
		}
	});

const setName = (name: string) =>
	update((state) => {
		return {
			...state,
			name,
		}
	});

const setEntities = (entityId: number) => update((state) => {
	const records = ENTITIES.filter((e) => Object.values(CATALOG).find((c) => entityId === c.entityId));
	return {
		...state,
		entities: records,
	}
})

const setCatalog = (records: Catalog[]) => update((state) => {
	return {
		...state,
		catalog: [
			...state.catalog, 
			...records
		],
	}
})

const setLoading = (value: boolean) => update((state) => {
	return {
		...state,
		loading: value,
	}
})

export default {
	subscribe,
	resetFilters,
	toggleFilter,
	setEntity,
	setName,
	setLoading,
	setEntities,
	setCatalog,
};
