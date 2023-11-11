<script lang="ts">

    let outerClass: HTMLDivElement | null = null;
    let classColor: HTMLDivElement | null = null;
    export let color: string;
    export let text: string = '';
    export let active: boolean = false;
    $:{ 
        if(classColor) {
            if(color) {
                classColor.classList.add(color);
            }
            if(active) {
                classColor.classList.add(`active`);
            }
        }
        if(outerClass && active){
            outerClass.classList.add(`active`);
        } 
    }
</script>

<div class="outer-round" bind:this={outerClass} >
    <div class="round" bind:this={classColor} >
        {text}
    </div>
</div>


<style>
    :global(.active){
        border: 3px solid black;
        box-shadow: 0px 0px 25px 25px rgba(1, 93, 103, 0.2);
    }
    .outer-round{
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 5px;
        border-radius: 50%;
        width: 63px;
        height: 60x;
    }
    .round{
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius: 50%;
        width: 55px;
        height: 40px;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    }
    :global(.round.gray){
        background-color: gray;
        color: black;
    }
    :global(.round.green) {
        background-color: green;
        color: black;
    }
    :global(.round.orange){
        background-color: orange;
        color: black;
    }
    :global(.round.lightyellow) {
        background-color: lightyellow;
        color: black;
    }
    :global(.round.lightred){
        background-color: pink;
        color: white;
    }
    :global(.round.red){
        background-color: red;
        color: white;
    }
    :global(.round.violet) {
        background-color: violet;
        color: white;
    }
    :global(.round.black) {
        background-color: black;
        color: white;
    }
</style>