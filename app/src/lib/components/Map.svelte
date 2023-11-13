<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { BEACHES } from '$lib/data';

	let mapElement: any;
	let map: any;

	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');
			const defineIcon = () => {
				const LeafIcon = L.Icon.extend({
					options: {
						iconSize: [38, 38],
						shadowSize: [50, 50],
						iconAnchor: [22, 22],
						shadowAnchor: [4, 4],
						popupAnchor: [-3, -10]
					}
				});
				const markerIcon = new LeafIcon({ iconUrl: '/marker-icon.png' });
				return { markerIcon };
			};
			map = L.map(mapElement).setView([-23.5849686, -70.3940418], 4);

			L
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);
			const { markerIcon } = defineIcon();
			for (const bc of Object.values(BEACHES)) {
				L.marker([bc.lat, bc.lng], { icon: markerIcon})
                .addTo(map)
                .bindPopup(
                    `${bc.title}: ${bc.details.substring(0, 200)} ... <a href="/beach/${bc.id}">Ver más</a>`
                );
			}
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 300px;
	}
</style>
