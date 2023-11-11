<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
	import { BEACHES } from '$lib/data';

    let mapElement: any;
    let map: any;

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView([-23.5849686,-70.3940418], 4);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            for(const bc of Object.values(BEACHES)){
                leaflet.marker([bc.lat,bc.lng]).addTo(map).bindPopup(`${bc.title}: ${bc.details.substring(0, 200)} ... <a href="/beach/${bc.id}">Ver más</a>`);
            }
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 300px;
    }
</style>