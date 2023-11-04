<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import { goRoute } from '@utils/routes';

	const id = Number($page.params.id);
	console.log({ id });
</script>

<Page>
	<br />
	<br />
	<br />
	<br />
	<br />
	<Block>
       <h2 class="title"> Selecciona la denuncia que quieres hacer:
    </h2>
    </Block>
	<Block outlineIos class="space-y-2">
		<Button>Ruidos molestos</Button>
		<Button onClick={() => goRoute('beach_report_contamination', {id})}>Contaminación</Button>
		<Button>Vehículos en la playa</Button>
		<Button onClick={() => goRoute('beach_report_fauna', {id})}>Maltrato de fauna silvestre</Button>
		<Button onClick={() => goRoute('beach_report_block', {id})}>Acceso bloqueado</Button>
	</Block>
</Page>


<style>
	.title {
		margin-top: 4.5rem;
		font-size: 2rem;
		line-height: 1.5;

	}
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
