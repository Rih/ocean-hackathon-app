
export interface Beach {
    id: number;
    title: string;
    region: string;
    plastic_index: number;
    danger_index: number;
    details: string;
}

export interface Entity {
    id: number;
    name: string;
    categoryId: number;
}

export const BEACHES: Beach[] = [
    { id: 1, title: 'Niebla', region: 'Región de los Ríos', plastic_index: 13, danger_index: 35, details: 'La Playa Niebla se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
    { id: 2, title: 'Trocadero', region: 'Región de Antofagasta', plastic_index: 13, danger_index: 35, details: 'La Playa Trocadero se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
    { id: 3, title: 'Lenga', region: 'Región de Antofagasta', plastic_index: 13, danger_index: 35, details: 'La Playa Lenga se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
    { id: 4, title: 'XXXX', region: 'Región de Antofagasta', plastic_index: 13, danger_index: 35, details: 'La Playa XXXX se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
    { id: 5, title: 'YYYY', region: 'Región del Maule', plastic_index: 13, danger_index: 35, details: 'La Playa YYYY se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
    { id: 6, title: 'ZZZZ', region: 'Región de los Lagos', plastic_index: 13, danger_index: 35, details: 'La Playa ZZZZ se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
];


export const CATEGORY_FLORA = 1;
export const CATEGORY_FAUNA = 2;

export const ENTITIES: Entity[] = [
    { id: 1, name: 'Aves', categoryId: CATEGORY_FAUNA, },
    { id: 2, name: 'Mamíferos', categoryId: CATEGORY_FAUNA, },
    { id: 3, name: 'Reptiles', categoryId: CATEGORY_FAUNA, },
    { id: 4, name: 'Anfibios', categoryId: CATEGORY_FAUNA, },
    { id: 5, name: 'Invertebrados marinos', categoryId: CATEGORY_FAUNA, },
    { id: 6, name: 'Plantas', categoryId: CATEGORY_FLORA, },
];


export interface Catalog {
    id: number;
    name: string;
    scientific_name: string;
    image: string;
    details: string;
    conservation_status: StatusConservation;
    entityId: number;
}

export enum StatusConservation {
    BP = 'BP',
    ALMOST_THREATENED = 'CA',
    VULNERABLE = 'V',
    A = 'A',
    CA = 'CA',
    ENDANGERED = 'EN',
    EXTINTION = 'E',
}

export const CATALOG: Catalog[] = [
    {
        id: 1,
        name: 'Pelícano',
        scientific_name: 'Pelecanus thagus',
        image: '',
        details: 'El pelícano es un ave marina costera. Esta especie es endémica de la Corriente de  Humboldt. Se alimenta principalmente de peces pequeños, como la anchoveta. Es común verlo cerca de caleta de pescadores, muelles, y roqueríos',
        conservation_status: StatusConservation.ALMOST_THREATENED,
        entityId: 1
    },
    {
        id: 2,
        name: 'Planta carnivora',
        scientific_name: 'Planta carnivorus',
        image: '',
        details: 'El flor de come lo que sea.',
        conservation_status: StatusConservation.ALMOST_THREATENED,
        entityId: 6
    }
]