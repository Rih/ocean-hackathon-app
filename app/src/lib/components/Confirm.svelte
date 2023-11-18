<script lang="ts">
	import {
		Page,
		Navbar,
		NavbarBackLink,
		Block,
		Button,
		Dialog,
		DialogButton,
		List,
		ListItem,
		Radio
	} from 'konsta/svelte';
	import { createEventDispatcher } from 'svelte';
	export let show: boolean = false;
    export let title: string = '';
    export let question: string = '';
    const dispatch = createEventDispatcher();
</script>

<Page>
	<Dialog opened={show} onBackdropClick={() => (dispatch('onClose', false))}>
		<svelte:fragment slot="title">{title}</svelte:fragment> {question}
		<svelte:fragment slot="buttons">
			<DialogButton strong onClick={() => (dispatch('onClose', false))}>Está más limpia</DialogButton>
			<DialogButton strong onClick={() => (dispatch('onClose', false))}>Está más sucia</DialogButton>
		</svelte:fragment>
	</Dialog>
</Page>
