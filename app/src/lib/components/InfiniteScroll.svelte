<script lang="ts">
    //core
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
  
    export let threshold: number = 0;
    export let horizontal: boolean = false;
    export let inverse: boolean = false;
    export let elementScroll: any = null;
    export let hasMore:boolean = true;
  
    const dispatch = createEventDispatcher();
    let isLoadMore: boolean = false;
    let component: any;
  
    $: {
      if (component || elementScroll) {
        const element = elementScroll ? elementScroll : component.parentNode;
  
        element.addEventListener("scroll", onScroll);
        element.addEventListener("resize", onScroll);
      }
    }
  
    const onScroll = (e: any) => {
      const element = e.target;
  
      let offset = horizontal
        ? e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft
        : e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
      
      if (inverse){
        offset = horizontal
        ? e.target.scrollLeft
        : e.target.scrollTop;
      }
      console.log("HORIZONTAL")
      console.log(e.target.scrollWidth)
      console.log(e.target.clientWidth)
      console.log(e.target.scrollLeft)
      console.log(offset);
      console.log("NO HORIZONTAL")
      console.log(e.target.scrollHeight);
      console.log(e.target.clientHeight);
      console.log(e.target.scrollTop);
      console.log(offset);
      if (offset <= threshold) {
        if (!isLoadMore && hasMore) {
          dispatch("loadMore");
        }
        isLoadMore = true;
      } else {
        isLoadMore = false;
      }
    };
  
    onDestroy(() => {
      if (component || elementScroll) {
        const element = elementScroll ? elementScroll : component.parentNode;
  
        element.removeEventListener("scroll", null);
        element.removeEventListener("resize", null);
      }
    });
  </script>
  
  <div bind:this={component} />