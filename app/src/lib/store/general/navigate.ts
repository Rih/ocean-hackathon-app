import type { ITag } from '$lib/components/types';
import { writable } from 'svelte/store';

export interface NavigateStore {
	menu: boolean;
	back: boolean;
	loading: boolean;
}

const TAGS_INIT: NavigateStore = {
	menu: false,
	back: false,
	loading: false,
};

const { subscribe, set, update } = writable(TAGS_INIT);


const toggleMenu = () =>
	update((state) => {
		return {
			...state,
			menu: !state.menu,
		}
	});

const shouldBack = (value: boolean) => update((state) => {
	return {
		...state,
		back: value,
	}
});

const setLoading = (value: boolean) => update((state) =>{
	return {
		...state,
		loading: value,
	}
})

export default {
	subscribe,
	toggleMenu,
	shouldBack,
	setLoading,
};
