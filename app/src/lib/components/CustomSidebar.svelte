<script lang="ts">
	import type { NavigateStore } from '$lib/store/general/navigate';
	import { goRoute, ROUTES } from '@utils/routes';
	import { CloseOutline } from 'flowbite-svelte-icons';
	import { Page, Navbar, Panel, Link, List, ListItem, Icon } from 'konsta/svelte';
	import { getContext } from 'svelte';

	const { navigateState } = getContext<any>('navigateStore');
	let leftPanelOpened: boolean = false;
	let subs = navigateState.subscribe((value: NavigateStore) => {
		leftPanelOpened = value.menu;
	});

	const goMenu = (name: string) => {
		goRoute(name, {})
		navigateState.toggleMenu();
	};

	const onClose = () => {
		navigateState.toggleMenu();
		leftPanelOpened = false
	};

	const excluded_routes = [
		'beach_bio_entity_organism',
		'beach_bio_entity', 'beach_bio_form', 'beach_bio_photo',
		'beach_opinion', 'beach_forum',
		'beach_contamination', 'beach_index','beach_bio_index', 'beach_evaluation',
		'beach_contamination_evaluate', 'beach_contamination_knowmore',
		'beach_contamination_feedback', 'beach_contamination_schedule',
		'beach_report_contamination', 'beach_report_fauna', 'beach_report_block',
		'beach_report', 'beach_bio_fauna', 'beach_bio_flora',
	];
	$: routes = ROUTES.filter(r => !excluded_routes.includes(r.name))
</script>

<Page>
	<Panel side="left" opened={leftPanelOpened} onBackdropClick={navigateState.toggleMenu}>
		<Page>
			<Navbar title="Vamos a la playa">
				<Link slot="right" iconOnly navbar onClick={() => onClose()}>
					<Icon badgeColors={{ bg: 'bg-red-500' }}>
						<CloseOutline />
					</Icon>
				</Link>
			</Navbar>
			<List>
				{#each routes as route}
					<ListItem href="#" onClick={() => goMenu(route.name)} title={route.title} />
				{/each}
			  </List>
		</Page>
	</Panel>
</Page>
