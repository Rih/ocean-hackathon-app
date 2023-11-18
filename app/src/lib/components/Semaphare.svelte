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


<style lang="postcss">
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
  
    
   
    :global(.round.softgreen) {
        background-color: rgba(157, 220, 157, 0.2);
        color: black;
    }
    :global(.round.green) {
        background-color: rgba(13, 129, 13, 1);
        color: black;
    }
    
    :global(.round.softyellow) {
        background-color: rgba(240, 240, 37, 0.2);
        color: black;
    }
    :global(.round.yellow) {
        background-color: rgba(255, 255, 0, 1);
        color: black;
    }

    :global(.round.softred){
        background-color: rgba(219, 90, 90, 0.2);
        color: white;
    }

    :global(.round.red){
        background-color: rgba(255, 0, 0, 1);
        color: white;
    }

</style>