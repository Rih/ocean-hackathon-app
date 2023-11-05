<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Title from '$lib/components/Title.svelte';
	import { goBack } from '@utils/routes';
	import { Page, List, ListItem, Preloader, Button, Block } from 'konsta/svelte';

	const acknowledge: string[] = [
		'Valentina Nuñez',
		'Cristóbal Castillo',
		'Javier Pinochet',
		'Macarena Díaz',
		'Rodrigo Díaz'
	];
</script>

<Page class="page">
	<Title title="Este proyecto fue desarrollado por:" />
	<Block>
		<List class="ack">
			{#each acknowledge as ack}
				<ListItem class="ack-item" title={ack} />
			{/each}
		</List>
	</Block>
		<!-- <Preloader size="w-16 h-16" /> -->
	<Block>
		<span class="ack-to text-center"> Agradecemos a </span>
	</Block>
	<Block>
	    <img class="image" src="" alt="logo1" width="100" /> 
	    <img class="image" src="./logoNewDev.png" alt="logo2 newdev" /> 
  	</Block>
	<Block>
		<p class="contribution">Por su valioso aporte a esta aplicación</p>
	</Block>
	<Footer>
		<Button>Contáctanos</Button>
	</Footer>
</Page>

<style>
	.page {
		display: flex;
		flex-direction: column;
	}
	.ack{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.ack-item {
		text-align: center;
	}
	.contribution {
		display: block;
		text-align: center;
		font-size: 1.2rem;
	}
	.image{
		width: 90vw;
		margin: 0 auto;
	}
	.ack-to {
		text-align: center;
	}
</style>
