<script lang="ts">
	import type { NavigateStore } from '$lib/store/general/navigate';
	import { Page, Navbar, Panel, Block, BlockTitle, Link, Button } from 'konsta/svelte';
	import { getContext } from 'svelte';

	const { navigateState } = getContext<any>('navigateStore');
	let leftPanelOpened: boolean = false;
	let subs = navigateState.subscribe((value: NavigateStore) => {
		leftPanelOpened = value.menu;
	});
</script>

<Page>
	<Navbar title="Panel / Side Panel" />
	<Block strongIos outlineIos class="space-y-4">
		<p>
			Konsta UI comes with 2 panels (on left and on right), both are optional. You can put
			absolutely anything inside: data lists, forms, custom content, etc.
		</p>
	</Block>
	<Block strongIos outlineIos class="flex space-x-4 rtl:space-x-reverse">
		<Button onClick={navigateState.toggleMenu}>Left Panel</Button>
	</Block>
	<BlockTitle>Floating Panels</BlockTitle>

	<Panel side="left" opened={leftPanelOpened} onBackdropClick={navigateState.toggleMenu}>
		<Page>
			<Navbar title="Left Panel">
				<Link slot="right" navbar onClick={() => (leftPanelOpened = false)}>Close</Link>
			</Navbar>
			<Block class="space-y-4">
				<p>Here comes left panel.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo,
					eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna.
					Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis
					dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim
					quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean
					semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae
					ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.
				</p>
			</Block>
		</Page>
	</Panel>
</Page>
