<script lang="ts">
    import { getRoute } from '../../utils/routes';

	interface Beach {
		id: number;
		name: string;
	}
	const beaches: Beach[] = [
		{ id: 1, name: 'Playa de la Concha' },
		{ id: 1, name: 'Playa de la Zurriol' },
		{ id: 1, name: 'Playa de la Ondarret' },
		{ id: 1, name: 'Playa de la Conch' }
	];
    const onBack = () => {
        window.location.href = getRoute('home');
    }
</script>

<h1>¿Qué playa quieres visitar hoy?</h1>

Listado de playas:
<select name="beach" id="beach">
	{#each beaches as beach}
		<option value={beach.id}>{beach.name}</option>
	{/each}
</select>

Ó escribe el nombre de la playa acá...

<i>search</i><input type="text" />

<a href={getRoute('manual')}>Manual de buenas prácticas</a>
<button on:click={onBack}>Volver</button>