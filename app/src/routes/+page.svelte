<script lang="ts">
	import { getRoute } from "@utils/routes";

    const onEnter = () => {
        console.log('onEnter')
        window.location.href = getRoute('search')
    }
    const onAbout = () => {
        console.log('onAbout')
        window.location.href = getRoute('about')
    }

</script>
<h1 class="text-3xl font-bold underline">
Hello world!
</h1>
<h1>Vamos a la Playa</h1>

<h2>
    Una app para promover el cuidado y conservación de las playas de Chile
</h2>

<button on:click={onEnter}>Entrar</button>

<button on:click={onAbout}>
    Saber más sobre este proyecto
</button>

<button>
    Salir de la app
</button>



<style lang="postcss">
    :global(html) {
      background-color: theme(colors.red.500);
    }
  </style>