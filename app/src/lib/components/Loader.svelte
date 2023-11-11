<script lang="ts">
	import type { NavigateStore } from '$lib/store/general/navigate';
	import { Preloader, Block } from 'konsta/svelte';
	import { getContext } from 'svelte';

  const { navigateState } = getContext<any>('navigateStore');
  let isLoading: boolean = false;
	let subs = navigateState.subscribe((value: NavigateStore) => {
		isLoading = value.loading;
	});
</script>
<Block insetMaterial outlineIos class="text-center">
  {#if isLoading}
    <Preloader />
  {/if}
</Block>
