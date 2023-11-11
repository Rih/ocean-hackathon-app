<script lang="ts">
	import { Page, Navbar, NavbarBackLink, Button, Toast, Block } from 'konsta/svelte';

	export let position: string = 'center';
	export let text: string = '';
	export let toastOpened: boolean = false;
	const openToast = (setter: any) => {
		// close other toast
		let toastOpened = false;
		setter();
	};
</script>

<Page>
	<Block strongIos outlineIos class="space-y-4">
		<Toast position="left" opened={toastOpened}>
			<Button slot="button" clear inline onClick={() => (toastOpened = false)}>Close</Button>
			<div class="shrink">{text}</div>
		</Toast>
	</Block>
</Page>
