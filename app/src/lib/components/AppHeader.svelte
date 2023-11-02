<script lang="ts">
	import { Navbar, Link } from 'konsta/svelte';
	import { getContext } from 'svelte';
	const { navigateState } = getContext<any>('navigateStore');
</script>

<Navbar class="header w-full" title="My App">
	<Link class="" slot="right" navbar onClick={() => navigateState.toggleMenu()}>Menu</Link>
</Navbar>

<style>
	.header {
		margin-top: 2px;
		width: 100vw;
	}
</style>
