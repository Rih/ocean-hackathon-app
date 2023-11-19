<script lang="ts">
	import { CloseOutline } from 'flowbite-svelte-icons';
	import { Icon, Link } from 'konsta/svelte';

	export let active: boolean = false;
	export let thumbnail: string = '';
	export let name: string = '';
	let classColor: any = null;
	$: {
		if (classColor) {
			if (active) {
				classColor.classList.add(`active`);
			}
		}
	}
</script>

<div class="entity-list" bind:this={classColor}>
	<Link iconOnly>
		<Icon badgeColors={{ bg: 'bg-red-500' }}>
			<img src={thumbnail}  alt="logo" height="30" width="30" />
		</Icon>
	</Link>
	<span>{name}</span>
</div>


<style>
    .entity-list.active{
		border: 2px solid red;
	}

	.entity-list{
		display: flex;
		justify-content: flex-start;
		gap: 14px;
	}
</style>