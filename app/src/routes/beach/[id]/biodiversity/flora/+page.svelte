<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { goRoute } from '@utils/routes';
	import { CATEGORY_FLORA, ENTITIES, type Entity } from '$lib/data';

	const id = Number($page.params.id);
	console.log({ id });

	const chunkArrayIntoPairs = (array: any) => {
		const chunkedArray = [];
		for (let i = 0; i < array.length; i += 2) {
			const pair = array.slice(i, i + 2);
			chunkedArray.push(pair);
		}
		return chunkedArray;
	};
	const entities = ENTITIES.filter((e) => e.categoryId == CATEGORY_FLORA);
	const dataEntities: Entity[][] = chunkArrayIntoPairs(entities);
</script>

<Page>
	<br />
	<br />
	<br />
	<br />
	{#each dataEntities as row}
		<Block outlineIos class="space-y-2">
			<div class="grid grid-cols-2 gap-x-4">
				{#each row as ent (ent.id)}
					<Button onClick={() => goRoute('beach_bio_entity', { id, entityId: ent.id })}>
						{ent.name}
					</Button>
				{/each}
			</div>
		</Block>
	{/each}
	<Footer />
</Page>
