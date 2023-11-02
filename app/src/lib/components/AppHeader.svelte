<script lang="ts">
	import { Navbar, Link } from 'konsta/svelte';
	import { getContext } from 'svelte';
    const { navigateState } = getContext<any>('navigateStore');
	const openMenu = () => {

    };
</script>

<Navbar title="My App">
	<Link class="" slot="right" navbar onClick={() => navigateState.toggleMenu()}>Menu</Link>
</Navbar>
