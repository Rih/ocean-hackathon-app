<script>

	import { goBack } from "@utils/routes";
	import { List, Preloader } from "konsta/svelte";

</script>
<div class="text-center">
Este proyecto fue desarrollado por:
</div>
<List>
    Valentina Nuñez
    Cristóbal Castillo
    Javier Pinochet
    Macarena Díaz
    Rodrigo Díaz
</List>

<div class="text-center">
    <Preloader size="w-16 h-16" />
  </div>
  
<button>Terminos y condiciones</button>

Agradecemos a 

Logo

Por su valioso aporte a esta aplicación

<button on:click={goBack}>Volver</button>