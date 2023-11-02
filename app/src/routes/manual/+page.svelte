<script>
	import Footer from '$lib/components/Footer.svelte';
	import { goRoute, goBack } from '@utils/routes';
	import { Block, BlockFooter, Button, List, ListItem, Page } from 'konsta/svelte';
</script>

<Page>
	<h1 class="title">Manual de Buenas prácticas</h1>

	<p class="subtitle">
		Sigue estos consejos para disfrutar de una jornada respetuosa y agradable en la playa
	</p>
	<Block>
		<List>
			<ListItem class="listitem"
				><b>No dejes residuos en la playa</b>. Llévate tu basura y recíclala adecuadamente.
				Recuerda, la
				<b>basura no vuelve sola</b>.</ListItem
			>

			<ListItem class="listitem"
				><b>Protege la flora y fauna</b>. Evita perturbar la vida marina y la vegetación de la
				playa. No toques ni dañes los animales o plantas que encuentres. Muchas playas son lugares
				de descanso o nidificación.</ListItem
			>

			<ListItem class="listitem"
				><b>Respeta las banderas y señales de seguridad en la playa</b>. Ten precaución al nadar y
				sigue las recomendaciones de los salvavidas.</ListItem
			>

			<ListItem class="listitem"
				><b>Cuida las dunas</b>. No camines ni conduzcas vehículos en las dunas, ya que esto puede
				dañar el ecosistema costero. Si observas vehículos en dunas, repórtalo.</ListItem
			>

			<ListItem class="listitem"
				>Uso responsable de las instalaciones: Si la playa tiene servicios, utilízalos de manera
				responsable y sigue las indicaciones de los encargados.</ListItem
			>

			<ListItem class="listitem"
				>Evitar la contaminación: <b
					>No viertas sustancias contaminantes en el agua ni en la arena</b
				>, y utiliza productos respetuosos con el medio ambiente.</ListItem
			>

			<ListItem class="listitem"
				>Respeto por otros visitantes: Mantén un comportamiento respetuoso con otros bañistas y
				usuarios de la playa.</ListItem
			>
		</List>
	</Block>
	<Footer />
</Page>

<style>
	.title {
		margin-top: 4rem;
		font-size: 2rem;
		font-weight: 800;
		padding: 2rem;
	}
	.subtitle {
		font-size: 1.8rem;
		text-align: justify;
		line-height: 1.3;
		padding: 2rem;
	}
	li.listitem {
		text-align: justify;
	}
</style>
