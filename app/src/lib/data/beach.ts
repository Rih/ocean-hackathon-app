export interface Beach {
    id: number;
    title: string;
    img: string;
    region: string;
    country: string;
    average_valuated: string;
    lat: number;
    lng: number,
    plastic_index: number;
    danger_index: number;
    details: string;
}


export const BEACHES: Beach[] = [
    { 
        id: 1, 
        average_valuated: 'poker', 
        img: '/playas/desembocadura/Desembocadura_1.jpg', 
        title: 'Desembocadura', 
        lat: -36.8155755, lng: -73.1565637, 
        region: 'Región del Biobío', 
        country: 'Chile', 
        plastic_index: 5.252525, danger_index: 0.42831945, 
        details: 'La playa de la Desembocadura del Biobío forma parte del Santuario de la Naturaleza Península de Hualpén, y se ubica a unos 25 minutos del centro de Concepción. Debido a que se encuentra dentro del Santuario, es posible observar flora y fauna terrestre y marina durante todo el año. Sus paisajes incluyen playas, acantilados y plataformas rocosas. Si bien su playa no es apta para el baño, sí se puede disfrutar de las templadas aguas del estuario.' },
    { 
        id: 2, 
        average_valuated: 'sad', 
        img: '/playas/trocadero/Trocadero1.jpeg', 
        title: 'Trocadero', 
        lat: -23.5849686, lng: -70.3940418, 
        region: 'Región de Antofagasta',
        country: 'Chile',
        plastic_index: 128.518519, danger_index: 136.319442, 
        details: 'La Playa Trocadero se encuentra en el norte de Chile, en la ciudad de Antofagasta, la cual tiene una población aproximada de 361,873 habitantes. La playa es conocida por su belleza natural y su ambiente relajante, siendo uno de los destinos más populares para disfrutar del mar y el clima cálido. ' },
    { 
        id: 3, 
        average_valuated: 'poker', 
        img: '/playas/lenga/Lenga_1.jpg', 
        title: 'Lenga', 
        lat: -36.7665442, lng: -73.1750468, 
        region: 'Región del Biobío', 
        country: 'Chile', 
        plastic_index: 4.44444, danger_index: 0.75244632, 
        details: 'La playa de Lenga es un atractivo destino en la Región del Biobío, a aproximadamente 20 minutos de Concepción. Con su amplia extensión de arena y su ambiente relajante, es un lugar popular para disfrutar del mar y del clima cálido. Sus paisajes impresionantes y su proximidad a la ciudad la convierten en un destino ideal para los amantes de la playa y la naturaleza. Además, posee una amplia oferta culinaria y a una corta caminata se puede conocer el Humedal de Lenga' },
    { 
        id: 4,  
        average_valuated: 'smile', 
        img: '/playas/punta_choros/pta_de_choros.jpg', 
        title: 'Punta de Choros', 
        lat: -29.2439963, lng: -71.4671482, 
        region: 'Región de Coquimbo', 
        country: 'Chile', 
        plastic_index: 0, danger_index: 0, 
        details: 'La playa en la caleta de Punta de Choros es un atractivo natural que pertenece a la comuna de La Higuera. Está ubicada a 114 kilómetros de La Serena y es un destino turístico al que acuden personas que quieren disfrutar de la naturaleza. Se caracteriza por sus aguas calmas y hermosas playas, y su principal atractivo es la rica biodiversidad de especies que habitan la Reserva Nacional Pingüino de Humboldt' },
    { 
        id: 5,  
        average_valuated: 'smile', 
        img: '/playas/punta_choros/pta_de_choros.jpg', 
        title: 'Deolen', 
        lat: -29.2439963, lng: -71.4671482, 
        region: 'Locmaria-Plouzané', 
        country: 'Francia', 
        plastic_index: 1, danger_index: 0.002, 
        details: 'La playa en la caleta de Punta de Choros es un atractivo natural que pertenece a la comuna de La Higuera. Está ubicada a 114 kilómetros de La Serena y es un destino turístico al que acuden personas que quieren disfrutar de la naturaleza. Se caracteriza por sus aguas calmas y hermosas playas, y su principal atractivo es la rica biodiversidad de especies que habitan la Reserva Nacional Pingüino de Humboldt' },
];
