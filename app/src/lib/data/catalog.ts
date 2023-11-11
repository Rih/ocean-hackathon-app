
export enum StatusConservation {
    LOW_CONCERN = 'BP',
    ALMOST_THREATENED = 'CA',
    VULNERABLE = 'V',
    THEATENED = 'A',
    CRITICAL_THREATENED = 'CA',
    EXTINT_NATURE = 'EN',
    EXTINTION = 'E',
}

export interface Catalog {
    id: number;
    name: string;
    scientific_name: string;
    image: string;
    details: string;
    conservation_status: StatusConservation;
    entityId: number;
    beachId?: number;
}
export const CATALOG: Catalog[] = [
    {
        id: 1,
        name: 'Gaviota',
        scientific_name: 'Gaviota thagus',
        image: '',
        details: 'La gaviota es un ave marina costera. Esta especie es endémica de la Corriente de  Humboldt. Se alimenta principalmente de peces pequeños, como la anchoveta. Es común verlo cerca de caleta de pescadores, muelles, y roqueríos',
        conservation_status: StatusConservation.ALMOST_THREATENED,
        entityId: 1,
    },
    {
        id: 3,
        name: 'Pelícano',
        scientific_name: 'Pelecanus thagus',
        image: '',
        details: 'El pelícano es un ave marina costera. Esta especie es endémica de la Corriente de  Humboldt. Se alimenta principalmente de peces pequeños, como la anchoveta. Es común verlo cerca de caleta de pescadores, muelles, y roqueríos',
        conservation_status: StatusConservation.ALMOST_THREATENED,
        entityId: 1
    },
    {
        id: 4,
        name: 'Zarapito',
        scientific_name: 'Zarapitus thagus',
        image: '',
        details: 'El Zarapito es un ave marina costera. Esta especie es endémica de la Corriente de  Humboldt. Se alimenta principalmente de peces pequeños, como la anchoveta. Es común verlo cerca de caleta de pescadores, muelles, y roqueríos',
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