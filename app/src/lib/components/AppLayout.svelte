<script lang="ts">
    import navigateState from '$lib/store/general/navigate';
	import { onMount, setContext } from 'svelte';

    function load(){
        setContext('navigateStore', {
            navigateState
        });
    }

    onMount(() => {
    });
    load();
</script>

<div>
<slot />
</div>