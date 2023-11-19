<script lang="ts">
	import { Block, Button, Link, List, ListInput, ListItem, Page } from 'konsta/svelte';
	import { page } from '$app/stores';
	import { BEACHES, CATEGORIES } from '$lib/data';
	import Title from '$lib/components/Title.svelte';
	import { goRoute } from '@utils/routes';
	import Chart from '$lib/components/Chart.svelte';

	const id = Number($page.params.id);
	const beach = BEACHES.find((b) => b.id == id)!;

	console.log({ id });

    const emotions = [
		{ name: 'sad', text: 'Con tristeza e impotencia' },
		{ name: 'worried', text: 'Preocupado/a' },
		{ name: 'poker', text: 'Indiferente' },
		{ name: 'quiet', text: 'Tranquilo/a' },
		{ name: 'smile', text: 'Optimista' }
	];
</script>

<Page>
	<Title title={`Comentarios de las visitas a la playa ${beach.title}`} justify="left" />
	<Block>
		<List strongIos outlineIos>
			<ListItem
			  chevronMaterial={false}
			  link
			  title="Yellow Submarine"
			  subtitle="Beatles"
			  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
			>
			  <img
				class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
				slot="media"
				src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
				width="80"
				alt="demo"
			  />
			</ListItem>
			<ListItem
			  chevronMaterial={false}
			  link
			  title="Don't Stop Me Now"
			  subtitle="Queen"
			  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
			>
			  <img
				class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
				slot="media"
				src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
				width="80"
				alt="demo"
			  />
			</ListItem>
			<ListItem
			  chevronMaterial={false}
			  link
			  title="Billie Jean"
			  subtitle="Michael Jackson"
			  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
			>
			  <img
				class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
				slot="media"
				src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
				width="80"
				alt="demo"
			  />
			</ListItem>
			<ListItem
			  chevronMaterial={false}
			  link
			  title="Billie Jean"
			  subtitle="Pete Parker"
			  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
			>
			  <img
				class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
				slot="media"
				src="https://cdn.framework7.io/placeholder/people-160x160-4.jpg"
				width="80"
				alt="demo"
			  />
			</ListItem>

		  </List>
	</Block>
	
</Page>


<style>
    .emoji {
		font-style: unset;
		font-size: 2rem;
		width: 50px;
		height: 50px;
	}
	.sad::before {
		content: '\1F625';
	}
	.worried::before {
		content: '\1F61F';
	}
	.poker::before {
		content: '\1F610';
	}
	.quiet::before {
		content: '\1F642';
	}
	.smile::before {
		content: '\1F601';
	}
</style>