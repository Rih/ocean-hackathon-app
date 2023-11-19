import { CATEGORY_FAUNA, CATEGORY_FLORA } from "$lib/data/category";

export interface Entity {
    id: number;
    name: string;
    categoryId: number;
    thumbnail: string;
}

export const ENTITIES: Entity[] = [
    { id: 1, name: 'Aves', categoryId: CATEGORY_FAUNA, thumbnail: '/categorias/Aves.svg' },
    { id: 2, name: 'Mamíferos', categoryId: CATEGORY_FAUNA, thumbnail: '/categorias/Mamiferos.svg' },
    { id: 3, name: 'Reptiles', categoryId: CATEGORY_FAUNA,thumbnail: '/categorias/Reptiles.svg' },
    { id: 4, name: 'Anfibios', categoryId: CATEGORY_FAUNA,thumbnail: '/categorias/Anfibios.svg' },
    { id: 5, name: 'Invertebrados marinos', categoryId: CATEGORY_FAUNA,thumbnail: '/categorias/invertebrados.svg'  },
    { id: 6, name: 'Plantas terrestres', categoryId: CATEGORY_FLORA,thumbnail: '/categorias/plantas.svg' },
    { id: 7, name: 'Algas', categoryId: CATEGORY_FLORA,thumbnail: '/categorias/algas.svg'  },
];