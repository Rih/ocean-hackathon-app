<script lang="ts">
	import type { NavigateStore } from '$lib/store/general/navigate';
	import { page } from '$app/stores';
	import { goBack } from '@utils/routes';
	import { Icon, Navbar, Link } from 'konsta/svelte';
	// import {
	// 	PersonCircleFill,
	// } from 'framework7-icons/svelte';
	import { BarsOutline, AngleLeftOutline } from 'flowbite-svelte-icons';
	import { getContext } from 'svelte';

	// let canReturn: boolean = false;
	console.log({ page: $page });
	const { navigateState } = getContext<any>('navigateStore');
	// let subs = navigateState.subscribe((value: NavigateStore) => {
	// 	canReturn = value.back;
	// });
	$: canReturn = $page.route.id !== '/';
</script>

<Navbar class="w-full" title="Vamos a la playa">
	<Link  slot="left" iconOnly navbar touchRipple onClick={() => canReturn ? goBack(): false }>
		<Icon badgeColors={{ bg: 'bg-red-500' }}>
			<AngleLeftOutline  class="hide"  />
		</Icon>
	</Link>
	<Link class="" slot="right" navbar touchRipple onClick={() => navigateState.toggleMenu()}
		>
		<Icon badgeColors={{ bg: 'bg-red-500' }}>
			<BarsOutline />
		</Icon>
	</Link>
</Navbar>

<style>
	.hide {
		visibility: 0;
	}
</style>
