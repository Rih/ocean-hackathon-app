<script lang="ts">
	import { CloseOutline } from 'flowbite-svelte-icons';
	import { Block, Button, Icon, Link } from 'konsta/svelte';
	import { useRegisterSW } from 'virtual:pwa-register/svelte';
	const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
		onRegistered(r) {
			// uncomment following code if you want check for updates
			// r && setInterval(() => {
			//    console.log('Checking for sw update')
			//    r.update()
			// }, 20000 /* 20s for testing purposes */)
			console.log(`SW Registered: ${r}`);
		},
		onRegisterError(error) {
			console.log('SW registration error', error);
		}
	});
	const close = () => {
		offlineReady.set(false);
		needRefresh.set(true);
	};
	$: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
	<div class="pwa-toast" role="alert">
		<Block>
			<Block>
				<div class="close">
					
				</div>
			</Block>
			<Block class="grid grid-cols-1 gap-x-1 msg-container">
				<div class="message">
					<Link slot="right" iconOnly navbar onClick={close}>
						<Icon badgeColors={{ bg: 'bg-red-500' }}>
							<CloseOutline />
						</Icon>
					</Link>
					{#if $offlineReady}
						<span> App lista para trabajar sin conexión </span>
					{:else}
						<span> Nuevo contenido disponible, click en Recargar para actualizar. </span>
					{/if}
				</div>
				
			</Block>
			{#if $needRefresh}
				<Block>
					<Button onClick={() => updateServiceWorker(true)}>Recargar</Button>
				</Block>
			{/if}
		</Block>
	</div>
{/if}

<style>
	.pwa-toast {
		position: fixed;
		right: 0;
		bottom: 0;
		margin: 16px;
		padding: 12px;
		border: 1px solid #8885;
		border-radius: 4px;
		z-index: 2000;
		text-align: left;
		box-shadow: 3px 4px 5px 0 #8885;
		background-color: white;
	}
	.pwa-toast .message {
		margin-bottom: 8px;
	}
	.message {
		display: flex;
	}
	.msg-container {
		display: flex;
		justify-content: space-between;
	}
	.close {
		width: 30px!important;
		position: relative;
		right: 0;
	}
	.pwa-toast button {
		border: 1px solid #8885;
		outline: none;
		margin-right: 5px;
		border-radius: 2px;
		padding: 3px 10px;
	}
</style>
