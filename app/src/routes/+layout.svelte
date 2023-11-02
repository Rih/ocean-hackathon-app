<script>
	import { onMount, setContext } from 'svelte';

	import { pwaInfo } from 'virtual:pwa-info';
	import '../app.css';
	import { App } from 'konsta/svelte';
	import AppLayout from '$lib/components/AppLayout.svelte';
	import { KonstaProvider } from 'konsta/svelte';
	import Sidebar from '$lib/components/CustomSidebar.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
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
		}
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<KonstaProvider theme="ios">
	<App theme="material">
		<div class="container">
			<AppLayout>
				<Sidebar />
				<div class="child">
					<AppHeader />
					<slot />
				</div>
			</AppLayout>
		</div>
	</App>
</KonstaProvider>

{#await import('$lib/ReloadPrompt.svelte') then { default: ReloadPrompt }}
	<ReloadPrompt />
{/await}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.blue.100);
	}
	:global(body) {
		/* background-image: url('./background.jpg');
		opacity: 0.1; */
	}
	.child{
		display: flex;
		flex-direction: column;
		width: 100vw;
		justify-items: stretch;
	}
</style>
