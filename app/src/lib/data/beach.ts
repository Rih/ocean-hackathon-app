export interface Beach {
    id: number;
    title: string;
    region: string;
    lat: number;
    lng: number,
    plastic_index: number;
    danger_index: number;
    details: string;
}


export const BEACHES: Beach[] = [
    { id: 1, title: 'Desembocadura', lat: -36.8155755, lng: -73.1565637, region: 'Región de los Ríos', plastic_index: 13, danger_index: 67, details: 'La playa de la desembocadura del Biobío forma parte del Santuario de la Naturaleza Península de Hualpén. Ubicado a unos 25 minutos del centro de Concepción. Debido a que se encuentra dentro del Santuario, es posible observar flora y fauna terrestre y marina durante todo el año. Sus paisajes incluyen playas, acantilados y plataformas rocosas.' },
    { id: 2, title: 'Trocadero', lat: -23.5849686, lng: -70.3940418, region: 'Región de Antofagasta', plastic_index: 57, danger_index: 9, details: 'La Playa Trocadero se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares en la Región de Antofagasta para disfrutar del mar y el clima cálido.' },
    { id: 3, title: 'Lenga', lat: -36.7665442, lng: -73.1750468, region: 'Región de Antofagasta', plastic_index: 46, danger_index: 56, details: 'La Playa de Lenga, en Chile, es un atractivo destino en la región del Biobío, cerca de Concepción. Con su amplia extensión de arena dorada y su ambiente relajante, es un lugar popular para disfrutar del mar y del clima cálido. Sus paisajes impresionantes y su proximidad a la ciudad la convierten en un destino ideal para los amantes de la playa y la naturaleza.' },
    { id: 4, title: 'Punta choros', lat: -29.2439963, lng: -71.4671482, region: 'Región de YYYY', plastic_index: 36, danger_index: 87, details: 'ZZZZZ' },
];
