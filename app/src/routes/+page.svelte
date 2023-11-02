<script lang="ts">
	import { goRoute } from '@utils/routes';
	import { Button, Block, Page, Navbar } from 'konsta/svelte';

	const onEnter = () => {
		console.log('onEnter');
		goRoute('search');
	};
	const onAbout = () => {
		console.log('onAbout');
		goRoute('about');
	};

	const onExit = () => {
		console.log('onExit');
		close();
	};
</script>

	<Page>
		<h1 class="text-3xl font-bold underline">Hello world!</h1>
		<h1>Vamos a la Playa</h1>

		<h2>Una app para promover el cuidado y conservación de las playas de Chile</h2>

		<Block strong outlineIos class="space-y-2">
			<div class="grid grid-cols-1 gap-x-4">
				<Button class="font-bold" onClick={onEnter} large outline>Entrar</Button>
			</div>
			<div class="grid grid-cols-1 gap-x-4">
				<Button class="font-bold" onClick={onAbout} large outline>
					Saber más sobre este proyecto
				</Button>
			</div>
		</Block>
		<Button onClick={onExit}>Salir de la app</Button>
	</Page>
