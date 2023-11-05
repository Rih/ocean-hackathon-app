<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';
	import Notify from '$lib/components/Notify.svelte';


	let open: boolean = false;
	const id = Number($page.params.id);
	console.log({ id });
</script>

<Page>
	<Title title="Selecciona la denuncia que quieres hacer:" />
	<Notify text="Página en construcción" toastOpened={open}/>
	<Block outlineIos class="space-y-2">
		<Button onClick={() => open = true}>Ruidos molestos</Button>
		<Button onClick={() => goRoute('beach_report_contamination', {id})}>Contaminación</Button>
		<Button onClick={() => open = true }>Vehículos en la playa</Button>
		<Button onClick={() => goRoute('beach_report_fauna', {id})}>Maltrato de fauna silvestre</Button>
		<Button onClick={() => goRoute('beach_report_block', {id})}>Acceso bloqueado</Button>
	</Block>
</Page>


<style>
	.subtitle {
		font-size: 1.8rem;
		text-align: center;
		color: black;
		line-height: 1.5;
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #b6d7a8;
	}
</style>
