import { CATEGORY_FAUNA, CATEGORY_FLORA } from "$lib/data/category";

export interface Entity {
    id: number;
    name: string;
    categoryId: number;
}

export const ENTITIES: Entity[] = [
    { id: 1, name: 'Aves', categoryId: CATEGORY_FAUNA, },
    { id: 2, name: 'Mamíferos', categoryId: CATEGORY_FAUNA, },
    { id: 3, name: 'Reptiles', categoryId: CATEGORY_FAUNA, },
    { id: 4, name: 'Anfibios', categoryId: CATEGORY_FAUNA, },
    { id: 5, name: 'Invertebrados marinos', categoryId: CATEGORY_FAUNA, },
    { id: 6, name: 'Plantas', categoryId: CATEGORY_FLORA, },
];