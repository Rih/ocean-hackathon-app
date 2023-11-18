<script lang="ts">
	import { Actions, ActionsButton, ActionsGroup, ActionsLabel, Block, Button, Fab, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Confirm from '$lib/components/Confirm.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';
	import Semaphare from '$lib/components/Semaphare.svelte';
	import { COLORS } from '$lib';
	import ChartContamination from '$lib/components/ChartContamination.svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';

	const id = Number($page.params.id);
	let showConfirm: boolean = false;
	const beach = BEACHES.find((b) => b.id == id)!;

	interface RangeColor {
			[x: string]: number[];
		}
	const rangesPlastic: RangeColor = {
			[COLORS.RED]: [10, 1000000000],
			[COLORS.YELLOW]: [2, 10],
			[COLORS.GREEN]: [0, 2]
		};
		const rangesDanger: RangeColor = {
			[COLORS.RED]: [4, 1000000000],
			[COLORS.YELLOW]: [1, 4],
			[COLORS.GREEN]: [0, 1]
		};
	const convertIndexToColor = (numero: number, ranges: RangeColor) => {
		
		const index = Object.values(ranges).findIndex(
			([minValue, maxValue]) => numero >= minValue && numero < maxValue
		);
		return Object.keys(rangesPlastic)[index];
	};
	const convertColorIntoPlasticDescription = (color: string) => {
		const ranges = {
			[COLORS.RED]: 'Sucio',
			[COLORS.YELLOW]: 'Moderadamente limpio',
			[COLORS.GREEN]: 'Limpio'
		};
		return ranges[color];
	};
	const convertColorIntoDangerDescription = (color: string) => {
		const ranges = {
			[COLORS.RED]: 'Peligroso',
			[COLORS.YELLOW]: 'Moderadamente seguro',
			[COLORS.GREEN]: 'Seguro'
		};
		return ranges[color];
	};
	let actionsOneOpened: boolean = false;
	const plasticColor = convertIndexToColor(beach.plastic_index, rangesPlastic);
	const dangerColor = convertIndexToColor(beach.danger_index, rangesDanger);
	const callToAction = beach.plastic_index > 2 || beach.danger_index > 2;
	const beachIndex: any[] = [
		{
			id: 1,
			title: 'Índice de plástico',
			colors: [COLORS.RED, COLORS.YELLOW, COLORS.GREEN],
			index: beach.plastic_index.toFixed(2),
			color: plasticColor,
			colorDescription: convertColorIntoPlasticDescription(plasticColor)
		},
		{
			id: 2,
			title: 'Índice de peligrosidad',
			colors: [COLORS.RED, COLORS.YELLOW, COLORS.GREEN],
			index: beach.danger_index.toFixed(2),
			color: dangerColor,
			colorDescription: convertColorIntoDangerDescription(dangerColor)
		}
	];
	console.log({ id });
</script>

<Page>
	<Title title={`Estado de contaminación de playa ${beach.title}`} justify="left" />
	{#each beachIndex as bi (bi.id)}
		<Block outlineIos class="space-y-2 elem" style="display:flex; flex-direction: column; justify-content: center; align-items: center;">
			<div class="">
				<span class="title-index">{bi.title}</span>
			</div>
			<div class="semaphare-contaner">
				{#each bi.colors as c}
					<Semaphare color={c} active={bi.color === c} />
				{/each}
			</div>
			<div
				style="display: flex; flex-direction: column; gap: 8px; text-wrap: wrap; justify-content: center;"
			>
				<span style="font-size: 28px;">{bi.colorDescription}</span>
				<span style="font-size: 18px; position: relative;bottom: 0px;">Valor: {bi.index}</span>
			</div>
		</Block>
	{/each}

	<Block>
		<ChartContamination graphType="line" />
	</Block>
	<Block>
		<div class="space"></div>
	</Block>
	<Block>
		<Fab
			class="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
			text="¿Qué quieres hacer?"
			textPosition="after"
			onClick={() => actionsOneOpened = true}
		>
			<svelte:component this={PlusOutline} slot="icon" />
			<span />
		</Fab>
	</Block>

	<Actions opened={actionsOneOpened} onBackdropClick={() => (actionsOneOpened = false)}>
		<ActionsGroup>
			<ActionsLabel>Acciones para estado de contaminación en {beach.title}</ActionsLabel>
			<ActionsButton onClick={() => showConfirm = true} bold>
				No estoy de acuerdo con los resultados
			</ActionsButton>
			<ActionsButton onClick={() => goRoute('beach_contamination_evaluate', { id })} bold>
				Evalua tu visita
			</ActionsButton>
			<ActionsButton onClick={() => (goRoute('beach_contamination_schedule', { id }))} bold>Agendar limpieza</ActionsButton>
			<ActionsButton onClick={() => (actionsOneOpened = false)}>Cerrar</ActionsButton>
		</ActionsGroup>
	</Actions>
	<Confirm
		show={showConfirm}
		on:onClose={() => {
			showConfirm = false;
			goRoute('beach_contamination_feedback', { id })

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
	.space {
		margin-top: 10vh;
	}
</style>
