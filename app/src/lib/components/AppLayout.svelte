<script lang="ts">
	import navigateState from '$lib/store/general/navigate';
	import biodiversityState from '$lib/store/biodiversity/biodiversity';
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	let homeClass: any = null;
	$: isHome = $page.route.id == '/';
	$: {
		if (homeClass) {
			if (isHome) {
				homeClass.classList.remove('app-container');
				homeClass.classList.add('home');
			} else {
				homeClass.classList.remove('home');
				homeClass.classList.add('app-container');
			}
		}
	}
	function load() {
		setContext('navigateStore', {
			navigateState
		});
		setContext('biodiversityStore', {
			biodiversityState
		});
	}
	load();
</script>

<div bind:this={homeClass}>
	<audio autoplay>
		<source src="/vamos-a-la-playa-ringtone.mp3" type="audio/mp3" />
	</audio>
	<slot />
</div>

<style lang="postcss">
	:global(.app-container::before) {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		background: linear-gradient(0deg, #fff 0%, #91e5df 100%);
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	:global(.app-container) {
		display: flex;
		flex-direction: column;
		color: white;
		object-fit: cover;
		background-repeat: no-repeat;
		background-position: 0 0;
		height: 100%;
		width: 100%;
		justify-items: center;
	}

	:global(.home::before) {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		background-repeat: no-repeat;
		background-position: 0 0;
		height: 100%;
		z-index: -1;
	}
	:global(.home) {
		display: flex;
		flex-direction: column;
		/* background-color: #f4e3c1; */
		background-image: url('/background-5.png');
		color: white;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0 0;
		height: 100vh;
		width: 100vw;
		justify-items: center;
	}
</style>
