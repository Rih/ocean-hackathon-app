<script lang="ts">
	import { goRoute } from '@utils/routes';
	import { BlockTitle, Button, Card, Link } from 'konsta/svelte';
	export let title: string = 'titulo';
	export let description: string = '';
	export let routeName: string = 'titulo';
	export let beachId: number = 0;
</script>

<div>
	<!-- <BlockTitle withBlock={false}>Styled Cards</BlockTitle> -->
	<Button class="mt-0" outline onClick={() => goRoute(routeName, { id: beachId })} 
    style="height: auto; margin: 0; padding: 0;background-image: url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);"
    >
			<Card outline={false} class="m-0 p-0">
				<div
					class="ios:-mx-4 ios:-mt-4 h-48 p-2 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl material:text-[22px]"
					style="background-image: url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);"
				>
					{title}
				</div>
				<!-- <div class="text-gray-500 mb-3">Posted on January 21, 2021</div> -->
				{#if description}
					<p>
						{description}
					</p>
				{/if}
			</Card>
	</Button>
</div>
