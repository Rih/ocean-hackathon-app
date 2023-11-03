<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
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
	<div class="title text-center">Este proyecto fue desarrollado por:</div>
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
	<Block>
		<Button>Contáctanos</Button>
	</Block>
	<Footer />
</Page>

<style>
	.page {
		display: flex;
		flex-direction: column;
	}
	.title {
		margin-top: 4.1rem;
		font-size: 2.1rem;
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
