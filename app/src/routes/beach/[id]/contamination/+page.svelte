<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { BEACHES } from '$lib/data';
	import { goRoute } from '@utils/routes';
	import Title from '$lib/components/Title.svelte';
	import Semaphare from '$lib/components/Semaphare.svelte';
	import { COLORS } from '$lib';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;
	const convertIndexToColor = (numero: number) => {
		interface RangeColor{
			[x: string]: number[];
		}
		const ranges:RangeColor = {
			[COLORS.GREEN]: [0, 2],
			[COLORS.YELLOW]: [2, 10],
			[COLORS.ORANGE]: [10, 20],
			[COLORS.RED]: [20, 50],
			[COLORS.VIOLET]: [50, Infinity],
		}
		const index = Object.values(ranges).findIndex(([minValue, maxValue]) => numero >= minValue && numero < maxValue);
		return Object.keys(ranges)[index];
	}

	const plasticColor = convertIndexToColor(beach.plastic_index)
	const dangerColor = convertIndexToColor(beach.danger_index)
	debugger;
	const beachIndex: any[] = [
		{
			id: 1,
			title: "Índice de plástico",
			colors: [
				COLORS.GREEN,
				COLORS.YELLOW,
				COLORS.ORANGE,
				COLORS.RED,
				COLORS.VIOLET,
			],
			index: beach.plastic_index.toFixed(2),
			color: plasticColor,
		},
		{
			id: 2,
			title: "Índice de peligrosidad",
			colors: [
				COLORS.GREEN,
				COLORS.YELLOW,
				COLORS.ORANGE,
				COLORS.RED,
				COLORS.VIOLET,
			],
			index: beach.danger_index.toFixed(2),
			color: dangerColor
		}
	];
	console.log({ id });
</script>

<Page>
	<Title title={`Estado de contaminación de playa ${beach.title}`} justify="left" />
	{#each beachIndex as bi(bi.id)}
		<Block outlineIos class="space-y-2">
			<div class="title-index">{bi.title}</div>
			<div class="grid grid-cols-2 gap-x-8 beach-index">
				<div>
					<div class="semaphare-contaner">
						{#each bi.colors as c}
							<Semaphare color={c} active={bi.color === c} />
						{/each}
					</div>
				</div>
				<div>
					<span style="font-size: 36px; position: relative;bottom: 0px;"
						>{bi.index}</span>
				</div>
			</div>
		</Block>
	{/each}

	<Block>
		<p>Recomendaciones a tomar debido al resultados de los dos índices.</p>
	</Block>
	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-2 gap-x-4">
			<div>
				<Button
					class="font-bold"
					onClick={() => goRoute('beach_contamination_evaluate', { id })}
					large
					outline>Evalúa tu playa</Button
				>
			</div>
			<div>
				<Button
					class="font-bold"
					onClick={() => goRoute('beach_contamination_knowmore', { id })}
					large
					outline>Saber más</Button
				>
			</div>
		</div>
	</Block>

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
	.title-index{
		text-align:center; 
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
		background: gray;
		width: 100px;
		padding: 5px;
		border: 3px solid blue;
	}
</style>
