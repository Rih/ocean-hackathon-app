<script lang="ts">
	import { goBack } from '@utils/routes';
	import { Block, BlockFooter, Button } from 'konsta/svelte';
</script>



<BlockFooter class="footer">
	<Button onClick={goBack}>Volver</Button>
</BlockFooter>


<style>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>