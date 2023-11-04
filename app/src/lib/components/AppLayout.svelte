<script lang="ts">
	import navigateState from '$lib/store/general/navigate';
	import { setContext } from 'svelte';

	function load() {
		setContext('navigateStore', {
			navigateState
		});
	}
    load();
	
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        justify-items: center;
	}
</style>
