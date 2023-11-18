<script lang="ts">
	import type { NavigateStore } from '$lib/store/general/navigate';
	import { page } from '$app/stores';
	import { goBack } from '@utils/routes';
	import { Icon, Navbar, Link } from 'konsta/svelte';
	import { BarsOutline, AngleLeftOutline } from 'flowbite-svelte-icons';
	import { getContext } from 'svelte';

	let canReturn: boolean = false;
	let title: string = '';
	console.log({ page: $page });
	const { navigateState } = getContext<any>('navigateStore');
	// let subs = navigateState.subscribe((value: NavigateStore) => {
	// 	canReturn = value.back;
	// });
	$: {
		canReturn = $page.route.id !== '/';
		title =  '';
	}
</script>

<Navbar colors={{bgIos: '', bgMaterial: ''}} class="w-full" {title} >
	<Link slot="left" iconOnly navbar touchRipple onClick={() => canReturn ? goBack(): false }>
		<Icon  badgeColors={{ bg: 'bg-red-500' }} >
			<AngleLeftOutline />
		</Icon>
	</Link>
	<Link slot="right" iconOnly navbar touchRipple onClick={() => navigateState.toggleMenu()}
		>
		<Icon badgeColors={{ bg: 'bg-red-500' }}>
			<BarsOutline />
		</Icon>
	</Link>
</Navbar>

<style lang="postcss">
	:global(.hide) {
		display: none;
	}
</style>
