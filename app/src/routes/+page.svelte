<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import GoogleButton from '$lib/components/GoogleButton.svelte';
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

<Page  colors={{bgIos: '', bgMaterial: ''}}>
	<Block >
		<Block class="space-y-4">
			<div class="space"></div>
		</Block>
		<Block class="space-y-4">
			<div class="space"></div>
		</Block>
		
		

		<Block outlineIos class="space-y-8">
			<div class="grid grid-cols-1 gap-x-4">
				<Button class="font-bold text-white" onClick={onEnter} large rounded>Entrar</Button>
			</div>
		</Block>
		<!-- <Block outlineIos class="space-y-2">
			<GoogleButton on:onClick={onEnter} />
		</Block> -->
		<Block outlineIos class="space-y-2">
			<div class="grid grid-cols-1 gap-x-4">
				<Button class="font-bold text-white" onClick={onAbout} large rounded>
					Saber más sobre este proyecto
				</Button>
			</div>
		</Block>
		<Block outlineIos class="space-y-2"> </Block>
		<Block outlineIos>
			<div class="container">
				<Title color="white" title="Promovamos el cuidado y conservación de las playas de Chile" strong justify="center" />
			</div>
		</Block>
		<Footer>
			<!-- <Button onClick={onExit}>Salir de la app</Button> -->
		</Footer>
	</Block>
</Page>

<style lang="postcss">
	.space {
		margin-top: 40vh;
	}
	.subtitle {
		font-size: 2.2rem;
		text-align: center;
		color: black;
		line-height: 1.5;
		padding: 3rem 1rem;
		opacity: 1;
		z-index: 1;
		/* background-color: #b6d7a8; */
	}
	:global(h1, h2, h3, h4, h5, h6, p) {
		opacity:1!important;
	}
	
	.box{
		opacity: 0.6;
		background-color: rgba(255, 255, 255, 0.361);
	}

	#customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }
</style>
