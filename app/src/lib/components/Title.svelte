<script lang="ts">
	import { Block } from 'konsta/svelte';

    export let title: string = '';
    export let strong: boolean = false;
    export let justify: string = 'center';
</script>

<Block {strong} outlineIos>
    <h1 class={`title ${justify}`}>{title}</h1>
</Block>

<style>
    .title {
        margin-top: 4rem;
        font-size: 3rem;
        line-height: 3rem;
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