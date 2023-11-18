<script lang="ts">
	import { Block, Button, List, ListItem, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Confirm from '$lib/components/Confirm.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';
	import Semaphare from '$lib/components/Semaphare.svelte';
	import { COLORS } from '$lib';

	const id = Number($page.params.id);
	let showConfirm: boolean = false;
	const beach = BEACHES.find((b) => b.id == id)!;

	const recomendations: string[] = [
		'-Selecciona el día que quieres realizar la limpieza ',
		'-Indica en el formulario la playa que quieres limpiar ',
		'-Indica la hora de reunión ',
		'-Indica un teléfono o correo de contacto',
		'-Deja	indicaciones que consideres relevantes para los participantes (qué implementos llevar, cómo llegar, etc)'
	];
	console.log({ id });
</script>

<Page>
	<Title title={`Agenda una limpieza grupal para ${beach.title}`} justify="left" />
	<Block outlineIos class="space-y-2">
		<List>
			{#each recomendations as recom}
				<ListItem>
					<p>{recom}</p>
				</ListItem>
			{/each}
		</List>
	</Block>

	<Block outlineIos class="space-y-2">
		<Button
			class="font-bold k-color-brand-red"
			onClick={() => goRoute('beach_contamination_evaluate', { id })}
			large>Agendar</Button
		>
	</Block>
	<Confirm
		show={showConfirm}
		on:onClose={() => {
			showConfirm = false;
			goRoute('beach_contamination_feedback', { id });
		}}
		title="Ayúdanos a mejorar"
		question="¿No estás de acuerdo con esta valoración?"
	/>
	<Footer />
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
	.title-index {
		text-align: center;
		font-weight: 700;
		font-size: 1.2rem;
		padding-bottom: 6px;
	}
	.beach-index {
		display: flex;
		justify-content: center;

		align-items: center;
	}
	.semaphare-contaner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		background: gray;
		width: 100px;
		padding: 15px 8px;
		border-radius: 10%;
		border: 3px solid darkgrey;
	}
</style>
