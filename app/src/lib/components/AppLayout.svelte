<script lang="ts">
	import navigateState from '$lib/store/general/navigate';
	import biodiversityState from '$lib/store/biodiversity/biodiversity';
	import { setContext } from 'svelte';

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

<div class="app-container">
	<slot />
</div>

<style>
	.app-container::before {
		/* background-color: linear-gradient(to right, red, #ffffff); */
		background: linear-gradient(0deg, #fff 0%, #91e5df  100%);
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.app-container {
        display: flex;
        flex-direction: column;
		/* background-color: #f4e3c1; */
		/* background-image: url('/background-5.png'); */
		color: white;
		/* object-fit: cover; */
		background-repeat: no-repeat;
		background-position: 0 0;
        /* height: 100vh; */
        width: 100vw; 
        justify-items: center;
	}
	
</style>
