<script lang="ts">
	import { goRoute } from '@utils/routes';
	import { BlockTitle, Button, Card, Link } from 'konsta/svelte';
	export let title: string = 'titulo';
	export let description: string = '';
	export let imageUrl: string = '';
	export let routeName: string = 'titulo';
	export let beachId: number = 0;
	export let entityId: number = 0;
	export let organismId: number = 0;

	const setShort = (s: string, maxLength: number = 500) => {
		if(s.length > maxLength - 3)
			return `${s.slice(0, maxLength)}...`;
		return s;
	}
</script>

<div>
	<!-- <BlockTitle withBlock={false}>Styled Cards</BlockTitle> -->

	<Card class="m-0 p-0">
		<div
			class="ios:-mx-4 ios:-mt-4 h-48 p-2 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
			style={`background-image: url(${imageUrl});`}
			on:click={(_) => goRoute('beach_bio_entity_organism', { id: beachId, entityId, organismId })}
		>
			
		</div>
		<div class="text-gray-500 mb-3">Subido el 21 de enero de 2021</div>
		<p>
			<span>Categoria</span>: <b>{title}</b>
		</p>
		<p>
			{setShort(description, 100)}
		</p>
		<div class="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse">
			<Button rounded inline outline onClick={() => goRoute('beach_bio_entity_organism', { id: beachId, entityId, organismId })}>Ver más</Button>
		</div>
	</Card>
</div>
