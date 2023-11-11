<script lang="ts">
	import { goBack } from '@utils/routes';
	import { Block, BlockFooter, Button } from 'konsta/svelte';
</script>



<BlockFooter >
    <div class="footer">
        <slot />
    </div>
</BlockFooter>

<style>
    .footer{
        position: relative;
        left: 0px;
        bottom: 0px;
        height: auto;
        margin-left: -15px;
        margin-right: -15px;
        width: 100vw;
    }
</style>