<script lang="ts">

    let outerClass: HTMLDivElement | null = null;
    let classColor: HTMLDivElement | null = null;
    export let color: string;
    export let text: string = '';
    export let active: boolean = false;
    $:{ 
        if(classColor) {
            if(color) {
                if(active){
                    classColor.classList.add(color);
                }else{
                    classColor.classList.add(`soft${color}`);
                }
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
        border: 3px solid rgb(255, 255, 0);
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
    :global(.round.softgray){
        background-color: rgb(191, 189, 189);
        color: black;
    }
    :global(.round.softgreen) {
        background-color: rgb(102, 155, 102);
        color: black;
    }
    :global(.round.softorange){
        background-color: rgb(245, 203, 125);
        color: black;
    }
    :global(.round.softlightyellow) {
        background-color: lightyellow;
        color: black;
    }
    :global(.round.softlightred){
        background-color: rgb(227, 195, 200);
        color: white;
    }
    :global(.round.softred){
        background-color: rgb(239, 84, 84);
        color: white;
    }
    :global(.round.softviolet) {
        background-color: violet;
        color: white;
    }
    :global(.round.softblack) {
        background-color: rgb(50, 49, 49);
        color: white;
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
        background-color: yellow;
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