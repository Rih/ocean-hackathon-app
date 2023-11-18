<script lang="ts">
	import { Block } from 'konsta/svelte';

    export let title: string = '';
    export let strong: boolean = false;
    export let justify: string = 'center';
</script>

<Block class="w-full" outlineIos>
    <div class="">
        <h1 class={`title ${justify}`}>{title}</h1>
    </div>
</Block>

<style>

    .container{
        background: rgba(0,0,0,0.5);
    }
    .title {
        margin-top: 4rem;
        font-size: 22px;
        line-height: 2.0;
        border-radius: 20%;
        text-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
        background: rgba(0,0,0,0);
    }
    .left{
        text-align: left;
    }
    .center{
        text-align: center;
    }
    .justify{
        text-align: justify;
    }
</style>