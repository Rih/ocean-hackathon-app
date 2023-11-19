<script lang="ts">
	import { onMount, setContext } from 'svelte';

	// @ts-ignore
	import { pwaInfo } from 'virtual:pwa-info';
	import '../app.css';
	import { App, KonstaProvider } from 'konsta/svelte';
	// import { App } from 'framework7-svelte';
	import AppLayout from '$lib/components/AppLayout.svelte';
	import Sidebar from '$lib/components/CustomSidebar.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppInstall from '$lib/components/AppInstall.svelte';

	onMount(async () => {
		if (pwaInfo) {
			// @ts-ignore
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r: any) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: ${r}`);
				},
				onRegisterError(error: any) {
					console.log('SW registration error', error);
				}
			});
		}
	});
	const f7parms = {
		theme: 'material'
		// ...
	};
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<KonstaProvider theme="parent">
	<App theme="material" >
	<!-- <App {...f7parms}> -->
		<!-- <AppK> -->
			<div id="container">
				<AppLayout>
					<Sidebar />
					<div class="child">
						<AppHeader />
						<AppInstall />
						<slot />
					</div>
				</AppLayout>
			</div>
		<!-- </AppK> -->
	</App>
</KonstaProvider>

{#await import('$lib/components/ReloadPrompt.svelte') then { default: ReloadPrompt }}
	<ReloadPrompt />
{/await}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.blue.100);
	}
	:global(.bg-md-light-surface){
		--tw-bg-opacity: 1;
		background-color: inherit;
		
	}
	:global(p, span) {
		color: black;
	}

	:global(div#container::before) {
		/* background-color: #9BE2DD; */
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	:global(div#container) {
        display: block;
        flex-direction: column;
		/* background-image: url('./background-5.png'); */
		/* background-color: #9BE2DD; */
		background: rgba(204, 204, 204, 0.5);
		color: white;
		background-size: 30% 100%;
		z-index: 0;
		/* object-fit: cover; */
		background-repeat: no-repeat;
		background-position: 0 0;
        justify-items: center;
	
	}
	:global(.container){
        background: rgba(0,0,0,0.3);
    }
	.child {
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 100vh;
		justify-items: stretch;
	}
</style>
