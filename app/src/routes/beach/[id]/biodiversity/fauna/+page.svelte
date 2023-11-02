<script lang="ts">
	import { Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
    
    const id = Number($page.params.id);
	console.log({id})
</script>

<Page>
	<br>
	<br>
	<br>
	<br>
	<br>
    FAUNA here
	<Footer />
</Page>