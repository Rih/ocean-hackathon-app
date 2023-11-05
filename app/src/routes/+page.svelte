<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Title from '$lib/components/Title.svelte';
	import { goRoute } from '@utils/routes';
	import { Button, Block, Page } from 'konsta/svelte';

	const onEnter = () => {
		console.log('onEnter');
		goRoute('search', {});
	};
	const onAbout = () => {
		console.log('onAbout');
		goRoute('credits', {});
	};

	const onExit = () => {
		console.log('onExit');
		close();
	};

</script>

<Page>
	<Title title="Vamos a la Playa" strong justify="center" />

	<Block>
		<p class="subtitle">Una app para promover el cuidado y conservación de las playas de Chile</p>
	</Block>

	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-1 gap-x-4">
			<Button class="font-bold" onClick={onEnter} large outline>Entrar</Button>
		</div>
	</Block>
	<Block outlineIos class="space-y-2">
		<div class="grid grid-cols-1 gap-x-4">
			<Button class="font-bold" onClick={onAbout} large outline>
				Saber más sobre este proyecto
			</Button>
		</div>
	</Block>
	<Block outlineIos class="space-y-2"> </Block>
	<Footer>
		<Button onClick={onExit}>Salir de la app</Button>
	</Footer>
</Page>

<style>
	.subtitle {
		font-size: 2.2rem;
		text-align: center;
		color: black;
		line-height: 1.5;
		padding: 3rem 1rem;
		background-color: #b6d7a8;
	}
</style>
