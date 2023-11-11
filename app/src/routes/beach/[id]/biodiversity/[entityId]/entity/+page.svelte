<script lang="ts">
	import { Block, Button, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import { goRoute } from '@utils/routes';
	import { CATEGORY_FAUNA } from '$lib/data/category';
	import { CATALOG } from '$lib/data/catalog';
	import type { Catalog } from '$lib/data/catalog';

	const id = Number($page.params.id);
	const entityId = Number($page.params.entityId);
	console.log({ id });

	const catalogs = CATALOG.filter((e) => e.entityId == entityId);
	const dataEntities: Catalog[] = catalogs;
    console.log({dataEntities})
</script>

<Page>
	<br />
	<br />
	<br />
	<br />
	{#each dataEntities as row}
		<Block outlineIos class="space-y-2">
			<div class="grid grid-cols-2 gap-x-4">
				<img src="" alt={row.name} />
				<Button
					onClick={() => goRoute('beach_bio_entity_organism', { id, entityId, organismId: row.id })}
				>
					Saber más
				</Button>
			</div>
		</Block>
	{/each}
	<Footer />
</Page>
