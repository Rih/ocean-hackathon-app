<script lang="ts">
	import { goRoute } from '@utils/routes';
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
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	export let show: boolean = false;
	const id = Number($page.params.id);
    export let title: string = '';
    export let question: string = '';
    const dispatch = createEventDispatcher();
</script>

<Page>
	<Dialog opened={show} onBackdropClick={() => (dispatch('onClose', false))}>
		<svelte:fragment slot="title">{title}</svelte:fragment> 
		{question}
		<svelte:fragment slot="buttons">
			<DialogButton strong onClick={() => (goRoute('beach_contamination_feedback', {id, feedId: 1}))}>Está más limpia</DialogButton>
			<DialogButton strong onClick={() => (goRoute('beach_contamination_feedback', {id, feedId: 2}))}>Está más sucia</DialogButton>
		</svelte:fragment>
	</Dialog>
</Page>
