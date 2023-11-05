<script lang="ts">
	import { Block, Button, List, ListInput, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import { BEACHES, CATEGORIES } from '$lib/data';
	import Title from '$lib/components/Title.svelte';
	import { goRoute } from '@utils/routes';

	const id = Number($page.params.id);
	console.log({ id });
	let name = { value: '', changed: false };
	let demoValue = '';

	const onNameChange = (e: any) => {
		name = { value: e.target.value, changed: true };
	};
	const onDemoValueChange = (e: any) => {
		demoValue = e.target.value;
	};
	const onDemoValueClear = () => {
		demoValue = '';
	};
</script>

<Page>
	<Title title="Registro de organismo" justify="left" />
	<Block>
		<List strongIos insetIos>
			<ListInput
				label="Playa"
				type="select"
				dropdown
				defaultValue=""
				placeholder="Por favor elige playa..."
			>
				{#each BEACHES as beach (beach.id)}
					<option value={beach.id}>{beach.title}</option>
				{/each}
			</ListInput>

			<ListInput
				label="Fecha"
				type="date"
				defaultValue="2014-04-30"
				placeholder="Por favor elige fecha..."
			/>
			<ListInput label="Organismo" type="text" placeholder="Indique el nombre del organismo..." />
			<ListInput
				label="Nombre científico"
				type="text"
				placeholder="Indique el nombre científico del organismo..."
			/>
			<ListInput label="Tipo" type="select" dropdown placeholder="Indique el tipo organismo..."
				>{#each CATEGORIES as cat (cat.id)}
					<option value={cat.id}>{cat.text}</option>
				{/each}
			</ListInput>
			<ListInput
				label="Observaciones"
				type="text"
				placeholder="Tus observaciones"
				info="Detalle y características del organismo"
				value={name.value}
				error={name.changed && !name.value.trim() ? 'La observación es requerida' : ''}
				onInput={onNameChange}
			/>
			<ListInput type="file" label="Subir foto" />
			<Block outlineIos class="space-y-2">
				<Button onClick={() => goRoute('beach_bio_photo', { id })}>Tomar foto</Button>
			</Block>
			<Block>
				<Button>Guardar</Button>
			</Block>
		</List>
	</Block>
</Page>
