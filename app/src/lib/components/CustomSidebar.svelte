<script lang="ts">
	import type { NavigateStore } from '$lib/store/general/navigate';
	import { goRoute, ROUTES } from '@utils/routes';
	import { Page, Navbar, Panel, Link, List, ListItem } from 'konsta/svelte';
	import { getContext } from 'svelte';

	const { navigateState } = getContext<any>('navigateStore');
	let leftPanelOpened: boolean = false;
	let subs = navigateState.subscribe((value: NavigateStore) => {
		leftPanelOpened = value.menu;
	});
	const excluded_routes = ['beach_bio_entity', 'beach_bio_form', 'beach_bio_photo'];
	$: routes = ROUTES.filter(r => !excluded_routes.includes(r.name))
</script>

<Page>
	<Panel side="left" opened={leftPanelOpened} onBackdropClick={navigateState.toggleMenu}>
		<Page>
			<Navbar title="Vamos a la playa">
				<Link slot="right" navbar onClick={() => (leftPanelOpened = false)}><i>clear_fill</i></Link>
			</Navbar>
			<List>
				{#each routes as route}
					<ListItem href="#" onClick={() => goRoute(route.name)} title={route.title} />
				{/each}
			  </List>
		</Page>
	</Panel>
</Page>
