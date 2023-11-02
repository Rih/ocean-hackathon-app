import type { ITag } from '$lib/components/types';
import { writable } from 'svelte/store';

export interface NavigateStore {
	menu: boolean;
}

const TAGS_INIT: NavigateStore = {
	menu: false,
};

const { subscribe, set, update } = writable(TAGS_INIT);


const toggleMenu = () =>
	update((state) => {
		return {
			...state,
			menu: !state.menu,
		}
	});

export default {
	subscribe,
	toggleMenu,
};
