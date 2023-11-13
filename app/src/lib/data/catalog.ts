import { COLORS } from "$lib";

export enum StatusConservation {
    LOW_CONCERN = 'LC',
    ALMOST_THREATENED = 'NT',
    VULNERABLE = 'VU',
    NO_EVALUATED = 'NE', // or empty
    IN_DANGER = 'EN',
    INSUFICIENT_DATA = 'DD',
    // THEATENED = 'A',
    // EXTINTION = 'E',
}
export interface SConservation {
    [key: string]: Record<string, {text: string, color: string}>;
}

export const STATES_CONSERVATION: SConservation = {
    [StatusConservation.LOW_CONCERN]: {
        text: 'Preocupación menor',
        color: COLORS.GREEN,
    },
    [StatusConservation.ALMOST_THREATENED]: { 
        text: 'Casi amenazada', 
        color: COLORS.ORANGE 
    },
    [StatusConservation.IN_DANGER]: { 
        text: 'En peligro', 
        color: COLORS.RED
    },
    [StatusConservation.NO_EVALUATED]: { 
        text: 'No evaluado', 
        color: COLORS.GREY,
    },
    [StatusConservation.INSUFICIENT_DATA]: { 
        text: 'Datos insuficientes', 
        color: COLORS.LIGHTYELLOW
    },
}

export interface Catalog {
    id: number;
    name: string;
    scientific_name: string;
    image: string;
    details: string;
    conservation_status: string;
    author: string;
    entityId: number;
    beachId: number;
}
export const CATALOG: Catalog[] = [
    {
        "id": 1,
        "beachId": 2,
        "entityId": 1,
        "name": "Gaviota garuma",
        "scientific_name": "Leucophaeus modestus",
        "image": "/playas//Aves/Gaviota garuma_Trocadero.jpeg",
        "author": "Felipe Valencia",
        "details": "La gaviota garuma se caracteriza por ser gris con patas negras. Se distribuye en toda la costa del Pac\u00edfico de Sudam\u00e9rica. En Chile la encontramos desde el extremo norte hasta Los Lagos. Se alimenta de peces peque\u00f1os, como la anchoveta, y de crust\u00e1ceos como la pulga de mar.",
        "conservation_status": "LC"
    },
    {
        "id": 2,
        "beachId": 2,
        "entityId": 1,
        "name": "Pilpil\u00e9n negro",
        "scientific_name": "Haematopus ater",
        "image": "/playas//Aves/Pilpil\u00e9n negro_Trocadero.jpeg",
        "author": "Felipe Valencia",
        "details": "El pilpil\u00e9n negro es un ave estrictamente costera que habita Per\u00fa, Chile y Argentina. Caracterizada por su color negro, en Chile se puede observar desde el extremo norte hasta Cabo de Hornos. Puesto que se alimenta de invertebrados marinos, el pilpil\u00e9n prefiere las playas rocosas, aunque tambi\u00e9n puede encontrarse en playas arenosas.",
        "conservation_status": "LC"
    },
    {
        "id": 3,
        "beachId": 2,
        "entityId": 1,
        "name": "Pilpil\u00e9n Com\u00fan",
        "scientific_name": "Haematopus palliatus",
        "image": "/playas//Aves/Pilpil\u00e9n com\u00fa_Trocadero.jpeg",
        "author": "Felipe Valencia",
        "details": "El pilpil\u00e9n com\u00fan es un ave estrictamente costa. De color negro, caf\u00e9, gris y un llamativo pico rojo, se le encuentra desde Estados Unidos hasta Chile y Argentina. Su h\u00e1bitat comprende marismas, el intermareal rocoso, y playas rocosas y escarpadas. Tambi\u00e9n descansan en dunas y playas arenosas.",
        "conservation_status": "LC"
    },
    {
        "id": 4,
        "beachId": 2,
        "entityId": 3,
        "name": "tortuga verde",
        "scientific_name": "Chelonia mydas",
        "image": "/playas//Reptiles/Tortuga verde.png",
        "author": "Javiera Peralta",
        "details": "La tortuga verde se distribuye en todos los mares tropicales y subtropicales del mundo. En Chile, se puede observar desde el extremo norte hasta Concepci\u00f3n, aunque son m\u00e1s frecuentes en el norte del pa\u00eds. Al igual que todas las tortugas, sufre un alto riesgo de colisi\u00f3n con embarcaciones. ",
        "conservation_status": "EN"
    },
    {
        "id": 5,
        "beachId": 2,
        "entityId": 3,
        "name": "tortuga cabezona",
        "scientific_name": "Caretta caretta",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "CR"
    },
    {
        "id": 6,
        "beachId": 2,
        "entityId": 3,
        "name": "Corredor de Atacama",
        "scientific_name": "Microlophus atacamensis",
        "image": "/playas//Reptiles/Corredor de Atacama.jpeg",
        "author": "Felipe Valencia",
        "details": "El Corredor de Atacama es un lagarto end\u00e9mico de Chile. Puede medir hasta 25 cm de longitud y se caracteriza por tener extremidades largas y robustas. Se distribuye en la zona costera de la Regi\u00f3n Antofagasta y Atacama. Se puede identificar por sus bandas negras al costado de su cuerpo.",
        "conservation_status": "LC"
    },
    {
        "id": 7,
        "beachId": 2,
        "entityId": 5,
        "name": "Chorito maico",
        "scientific_name": "Perumytilus purpuratus",
        "image": "/playas//Invertebrados marinos/Perumytilus purpuratus.jpeg",
        "author": "Felipe Valencia",
        "details": "El chorito maico es una especie de mejill\u00f3n que habita las costas de Per\u00fa, Chile y Argentina. Caracterizado por la tonalidad p\u00farpura o morada de sus conchas, es com\u00fan observarlo asociado a rocas del ambiente intermareal. Este molusco no suele comerse por su peque\u00f1o tama\u00f1o, ya que alcanza tama\u00f1os m\u00e1ximos de 3 cm.",
        "conservation_status": "NE"
    },
    {
        "id": 8,
        "beachId": 2,
        "entityId": 5,
        "name": "Caracol cebra",
        "scientific_name": "Nodilittorina peruviana",
        "image": "/playas//Invertebrados marinos/Nodilittorina peruviana.jpeg",
        "author": "Felipe Valencia",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 9,
        "beachId": 2,
        "entityId": 5,
        "name": "Estrella espinosa",
        "scientific_name": "Meyenaster gelatinosus",
        "image": "/playas//Invertebrados marinos/Meyenaste gelatinosus.png",
        "author": "Felipe Valencia",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 10,
        "beachId": 2,
        "entityId": 2,
        "name": "Chungungo o nutria marina",
        "scientific_name": "Lontra felina",
        "image": "/playas//Mam\u00edferos/Lontra_felina.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 11,
        "beachId": 2,
        "entityId": 2,
        "name": "Delf\u00edn nariz de botella",
        "scientific_name": "Tursiops truncatus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 12,
        "beachId": 2,
        "entityId": 2,
        "name": "Delf\u00edn com\u00fan costero",
        "scientific_name": "Delphinus capensis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "DD"
    },
    {
        "id": 16,
        "beachId": 2,
        "entityId": 7,
        "name": "Rhodymenia corallina",
        "scientific_name": "Rhodymenia corallina",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Esta alga roja se distribuye en las aguas templadas de Sudam\u00e9rica, lo que incluye las costas de Per\u00fa hasta Chile central. Sus frondas (\u201chojas\u201d) son planas, brillantes y de color rojizo. Pueden alcanzar los 20 cm de altura. Sus hojas son ramificadas y terminan en una bifurcaci\u00f3n.",
        "conservation_status": "NE"
    },
    {
        "id": 19,
        "beachId": 4,
        "entityId": 1,
        "name": "Gaviota peruana",
        "scientific_name": "Larus belcheri",
        "image": "/playas//Aves/Gaviota peruana_Trocadero.jpeg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 20,
        "beachId": 4,
        "entityId": 1,
        "name": "turca",
        "scientific_name": "Pteroptochos megapodius",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 21,
        "beachId": 4,
        "entityId": 1,
        "name": "churrete costero",
        "scientific_name": "Cinclodes nigrofumosus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 22,
        "beachId": 4,
        "entityId": 1,
        "name": "zarapito com\u00fan",
        "scientific_name": "Numenius phaeopus",
        "image": "/playas//Aves/Zarapito com\u00fan_Trocadero.jpeg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 23,
        "beachId": 4,
        "entityId": 1,
        "name": "ping\u00fcino de humboldt",
        "scientific_name": "Spheniscus humboldt",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "VU"
    },
    {
        "id": 24,
        "beachId": 4,
        "entityId": 1,
        "name": "piquero",
        "scientific_name": "Sula variegata",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 25,
        "beachId": 4,
        "entityId": 1,
        "name": "yunco o petrel buceador",
        "scientific_name": "Pelacanoides garnotii",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "VU"
    },
    {
        "id": 26,
        "beachId": 4,
        "entityId": 3,
        "name": "Lagarto de Zapallar ",
        "scientific_name": "Liolaemus zapallarensis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 27,
        "beachId": 4,
        "entityId": 3,
        "name": "Lagartija de Atacama ",
        "scientific_name": "Liolaemus atacamensis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 28,
        "beachId": 4,
        "entityId": 3,
        "name": "Culebra de Cola Corta",
        "scientific_name": "Tachymenis chilensis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NT"
    },
    {
        "id": 29,
        "beachId": 4,
        "entityId": 5,
        "name": "Cangrejito cafe ",
        "scientific_name": "Cyclograpsus cinereus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 30,
        "beachId": 4,
        "entityId": 5,
        "name": "Fragata portuguesa ",
        "scientific_name": "Physalia physalis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 31,
        "beachId": 4,
        "entityId": 5,
        "name": "Jaiba corredora ",
        "scientific_name": "Leptograpsus variegatus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 32,
        "beachId": 4,
        "entityId": 6,
        "name": "a\u00f1a\u00f1uca amarilla",
        "scientific_name": "Rodophialia bagnoldii",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 33,
        "beachId": 4,
        "entityId": 6,
        "name": "copao",
        "scientific_name": "Eulychnia acida",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 34,
        "beachId": 4,
        "entityId": 6,
        "name": "Lirio",
        "scientific_name": "Alstroemeria philippi",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NT"
    },
    {
        "id": 35,
        "beachId": 4,
        "entityId": 7,
        "name": "huiro ",
        "scientific_name": "Macrosistys pyrifera",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 36,
        "beachId": 4,
        "entityId": 7,
        "name": "chicoria de mar ",
        "scientific_name": "Chondracanthus chamissoi",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 37,
        "beachId": 4,
        "entityId": 7,
        "name": "Pelillo",
        "scientific_name": "Gracilaria chilensis ",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 38,
        "beachId": 4,
        "entityId": 2,
        "name": "cururo",
        "scientific_name": "Spalacopus cyanus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 39,
        "beachId": 4,
        "entityId": 2,
        "name": "lauchita de las dunas",
        "scientific_name": "Eligmodontia dunaris",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 40,
        "beachId": 4,
        "entityId": 2,
        "name": "calderon gris",
        "scientific_name": "Grampus griseus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 41,
        "beachId": 4,
        "entityId": 2,
        "name": "delf\u00edn nariz de botella",
        "scientific_name": "Tursiops truncatus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 42,
        "beachId": 4,
        "entityId": 2,
        "name": "chungungo o nutria marina",
        "scientific_name": "Lontra felina",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 43,
        "beachId": 4,
        "entityId": 2,
        "name": "lobo marino",
        "scientific_name": "Otaria flavescens",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "LC"
    },
    {
        "id": 44,
        "beachId": 3,
        "entityId": 1,
        "name": "gaviota cahuil",
        "scientific_name": "Chroicocephalus maculipennis",
        "image": "/playas//Aves/Gaviota cahuil_Lenga.jpg",
        "author": "Cynthia Vasquez",
        "details": " La gaviota Cahuil es end\u00e9mica de Am\u00e9rica del Sur, destaca en Chile y se alimenta de peces, crust\u00e1ceos y otros organismos acu\u00e1ticos. Su presencia es com\u00fan en zonas costeras y es estudiada en ornitolog\u00eda y conservaci\u00f3n.",
        "conservation_status": "LC"
    },
    {
        "id": 45,
        "beachId": 3,
        "entityId": 1,
        "name": "zarapito de pico recto",
        "scientific_name": "Limosa haemastica",
        "image": "/playas//Aves/Zarapito pico recto_Lenga.jpg",
        "author": "Cynthia Vasquez",
        "details": "El Zarapito de pico recto, nativo de Am\u00e9rica del Norte, migra al sur en invierno (Argentina y Chile). Se alimenta de invertebrados acu\u00e1ticos en humedales y playas, es esencial para los ecosistemas costeros y se estudia en ornitolog\u00eda y conservaci\u00f3n.",
        "conservation_status": "LC"
    },
    {
        "id": 46,
        "beachId": 3,
        "entityId": 1,
        "name": "zarapito com\u00fan",
        "scientific_name": "Numenius phaeopus",
        "image": "/playas//Aves/Zarapito comun-Lenga.jpg",
        "author": "Cynthia Vasquez",
        "details": "El zarapito com\u00fan es una ave migratoria presente en zonas costeras de todo el mundo, incluyendo Chile y Argentina. Se alimenta de invertebrados marinos en \u00e1reas intermareales y playas, es esencial para los ecosistemas costeros y es objeto de estudio en ornitolog\u00eda y conservaci\u00f3n debido a su distintivo canto.",
        "conservation_status": "LC"
    },
    {
        "id": 47,
        "beachId": 3,
        "entityId": 3,
        "name": "Lagartija esbelta",
        "scientific_name": "Liolaemus tenuis",
        "image": "/playas//Reptiles/Lagartija esbelta_Lenga.jpg",
        "author": "Amado Villalobos Leiva",
        "details": "La lagartija Esbelta es end\u00e9mica de Am\u00e9rica del Sur, con presencia destacada en Chile, habita zonas costeras y dunas. Se alimenta de insectos e invertebrados, y desempe\u00f1a un papel ecol\u00f3gico relevante en el control de poblaciones de insectos. Es objeto de estudio en herpetolog\u00eda y conservaci\u00f3n regional.",
        "conservation_status": "LC"
    },
    {
        "id": 48,
        "beachId": 3,
        "entityId": 3,
        "name": "La serpiente de cola larga",
        "scientific_name": "Phylodryas chamissonis,",
        "image": "/playas//Reptiles/La serpiente de cola larga_Lenga.jpg",
        "author": "Amado Villalobos Leiva",
        "details": "Sin descripción",
        "conservation_status": "NE"
    },
    {
        "id": 49,
        "beachId": 3,
        "entityId": 3,
        "name": "Lagartija Com\u00fan",
        "scientific_name": "Liolaemus lemniscatus",
        "image": "/playas//Reptiles/Lagartija Com\u00fan_Lenga.jpg",
        "author": "Amado Villalobos Leiva",
        "details": "La lagartija com\u00fan, end\u00e9mica de Am\u00e9rica del Sur, es notable en Chile, habitando \u00e1reas rocosas y cercanas a cuerpos de agua. Se alimenta de insectos y peque\u00f1os invertebrados, desempe\u00f1a un papel ecol\u00f3gico importante en el control de poblaciones de insectos y es objeto de estudio en herpetolog\u00eda, enriqueciendo la biodiversidad local.",
        "conservation_status": "LC"
    },
    {
        "id": 50,
        "beachId": 3,
        "entityId": 2,
        "name": "chungungo o nutria marina",
        "scientific_name": "Lontra felina",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El Chungungo, tambi\u00e9n conocido como nutria marina, es un mam\u00edfero marino nativo de Am\u00e9rica del Sur, destacando en las costas de Chile. Su presencia contribuye a la biodiversidad marina y es objeto de inter\u00e9s en la investigaci\u00f3n de la vida marina.",
        "conservation_status": "EN"
    },
    {
        "id": 51,
        "beachId": 3,
        "entityId": 2,
        "name": "Ballena jorobada",
        "scientific_name": "Megaptera novaengliae",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "La ballena jorobada, es un cet\u00e1ceo que migra largas distancias. Conocida por sus saltos y complejas canciones, es esencial en la ecolog\u00eda marina y un foco de estudios cient\u00edficos para comprender mejor sus patrones migratorios y comportamiento.",
        "conservation_status": "LC"
    },
    {
        "id": 52,
        "beachId": 3,
        "entityId": 2,
        "name": "Delf\u00edn nariz de botella",
        "scientific_name": "Tursiops truncatus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El delf\u00edn nariz de botella, es un cet\u00e1ceo inteligente y social. Presente en h\u00e1bitats marinos y costeros, destaca por sus acrobacias y complejas interacciones sociales. Es objeto de estudio en biolog\u00eda marina para entender su comportamiento y conservaci\u00f3n.",
        "conservation_status": "EN"
    },
    {
        "id": 53,
        "beachId": 3,
        "entityId": 5,
        "name": "Estrella chica",
        "scientific_name": "Patiria chilensis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "La estrella chica, en Am\u00e9rica del Sur, especialmente en Chile, reside en fondos marinos arenosos, se alimenta de part\u00edculas e invertebrados, y es esencial en la cadena alimentaria y la biodiversidad costera, objeto de estudio en biolog\u00eda marina.",
        "conservation_status": "LC"
    },
    {
        "id": 54,
        "beachId": 3,
        "entityId": 5,
        "name": "Estrella de mar",
        "scientific_name": "Stichaster striatus",
        "image": "/playas//Invertebrados marinos/Stichaster striatus_Lenga.jpg",
        "author": "Karla Elizabeth Perez Araneda",
        "details": "La m\u00e1s com\u00fan de las estrellas de mar. De color anaranjado o amarillento. Tiene forma de disco peque\u00f1o con 4 a 7 brazos (usualmente 5).  Se alimenta de moluscos y crust\u00e1ceos,",
        "conservation_status": "NE"
    },
    {
        "id": 55,
        "beachId": 3,
        "entityId": 5,
        "name": "Cangrejito viol\u00e1ceo",
        "scientific_name": "Petrolisthes laevigatus",
        "image": "/playas//Invertebrados marinos/Petrolisthes laevigatus_Lenga (2).jpg",
        "author": "Amado Villalobos Leiva",
        "details": " El Cangrejito viol\u00e1ceo, en Am\u00e9rica del Sur (Chile), vive en zonas costeras, se alimenta de algas y es parte de la cadena alimentaria marina, estudiado en biolog\u00eda marina y vital para la biodiversidad costera.",
        "conservation_status": "NE"
    },
    {
        "id": 56,
        "beachId": 3,
        "entityId": 6,
        "name": "Peumo",
        "scientific_name": "Cryptocarya alba",
        "image": "/playas//Plantas/Peumo.jpg",
        "author": "Andrea Navarro",
        "details": "El Peumo es un \u00e1rbol end\u00e9mico, siempreverde de hasta 30 m de alto. Posee hojas verdes brillantes por encima y blanquecinas y opacas por abajo. Su fruto es rojo y comestible. Se ha utilizado para tratar enfermedades del h\u00edgado. Se distribuye desde la regi\u00f3n de Coquimbo hasta Los R\u00edos.",
        "conservation_status": "LC"
    },
    {
        "id": 57,
        "beachId": 3,
        "entityId": 6,
        "name": "Chilco ",
        "scientific_name": "Fuchsia magellanica",
        "image": "/playas//nodisponible.jpg",
        "author": "Sin autor",
        "details": "El Chilco es unaplanta nativa de Am\u00e9rica del Sur, destaca en Chile. Sus flores vibrantes y adaptabilidad la hacen esencial en la biodiversidad y objeto de estudio en bot\u00e1nica.",
        "conservation_status": "NE"
    },
    {
        "id": 58,
        "beachId": 3,
        "entityId": 6,
        "name": "Laurel ",
        "scientific_name": "Laurelia sempervirens",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El Laurel es un\u00e1rbol nativo de Am\u00e9rica del Sur, especialmente en Chile. Su madera valiosa y papel ecol\u00f3gico la convierten en objeto de estudio bot\u00e1nico y componente crucial de los ecosistemas locales.",
        "conservation_status": "LC"
    },
    {
        "id": 59,
        "beachId": 3,
        "entityId": 7,
        "name": "Luga cuchara",
        "scientific_name": "Mazzaella laminarioides",
        "image": "/playas//Algas/Luga cuchara (Mazaaella L)_Lenga.jpg",
        "author": "Ricardo jeldres",
        "details": "Luga Cuchara, alga roja, es nativa de las costas de Am\u00e9rica del Sur, en especial en Chile. Su presencia en ecosistemas marinos la hace vital para la biodiversidad. Estudios en biolog\u00eda marina exploran su papel ecol\u00f3gico y posibles aplicaciones en la investigaci\u00f3n cient\u00edfica.",
        "conservation_status": "NE"
    },
    {
        "id": 61,
        "beachId": 3,
        "entityId": 7,
        "name": "lechuga de mar",
        "scientific_name": "Ulva sp",
        "image": "/playas//Algas/Lechuga de mar_lenga.jpg",
        "author": "Ricardo jeldres",
        "details": "La  Lechuga de mar, es una alga verde presente en todo el mundo, incluyendo costas de Am\u00e9rica del Sur. Su abundancia la convierte en un componente clave de los ecosistemas costeros. Investigaciones en biolog\u00eda marina exploran su contribuci\u00f3n a la salud del ecosistema y posibles aplicaciones.",
        "conservation_status": "NE"
    },
    {
        "id": 62,
        "beachId": 1,
        "entityId": 1,
        "name": "piquero",
        "scientific_name": "Sula variegata",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Es el piquero com\u00fan m\u00e1s extendido en Chile. De cabeza blanca, dorso y alas oscuras y patas de color gris azulado. Se caracteriza por su zambullida en picada, la cual realiza cuando se alimenta. Prefiere ambientes costeros, rocosos y escarpados.",
        "conservation_status": "LC"
    },
    {
        "id": 63,
        "beachId": 1,
        "entityId": 1,
        "name": "gaviota de franklin",
        "scientific_name": "Leucophaeus pipixcan",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "La gaviota de Franklin se puede observar en grandes bandadas en invierno en el centro y norte de Chile. Es un ave principalmente costera que posee plumas color negro en la cabeza y punta del ala. El resto del cuerpo es de color blanco y gris.",
        "conservation_status": "LC"
    },
    {
        "id": 64,
        "beachId": 1,
        "entityId": 1,
        "name": "flamenco chileno",
        "scientific_name": "Phoenicopterus chilensis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El flamenco chileno es un ave migratoria, com\u00fan en nuestro pa\u00eds. Se alimenta en lagos y lagunas salobres y de baja profundidad. De patas grises y articulaciones y pies rojos. Normalmente se observa en bandadas.",
        "conservation_status": "NT"
    },
    {
        "id": 65,
        "beachId": 1,
        "entityId": 3,
        "name": "lagartija pintada",
        "scientific_name": "Liolaemus pictus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "La lagartija pintada posee vistosos colores, cola m\u00e1s larga que el cuerpo. Es omn\u00edvoro, consume frutos e insectos y ara\u00f1as. Se distribuye desde la regi\u00f3n del Biob\u00edo hasta Ays\u00e9n y entre 0 a 1700 msnm. Asociada a bosques de Nothofagus, suelo o rocas.",
        "conservation_status": "LC"
    },
    {
        "id": 66,
        "beachId": 1,
        "entityId": 3,
        "name": "lagarto n\u00edtido",
        "scientific_name": "Liolaemus nitidus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Las escamas del lagarto n\u00edtido reflejan la luz. Su cola duplica el largo del cuerpo. Los adultos presentan escamas grises o amarillentas en el dorso. Se asocian a sectores precordilleranos y roquer\u00edos cercanos al mar, desde Atacama hasta el Biob\u00edo.",
        "conservation_status": "NT"
    },
    {
        "id": 67,
        "beachId": 1,
        "entityId": 6,
        "name": "Peumo",
        "scientific_name": "Cryptocarya alba",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El Peumo es un \u00e1rbol end\u00e9mico, siempreverde de hasta 30 m de alto. Posee hojas verdes brillantes por encima y blanquecinas y opacas por abajo. Su fruto es rojo y comestible. Se ha utilizado para tratar enfermedades del h\u00edgado. Se distribuye desde la regi\u00f3n de Coquimbo hasta Los R\u00edos.",
        "conservation_status": "LC"
    },
    {
        "id": 68,
        "beachId": 1,
        "entityId": 6,
        "name": "Olivillo",
        "scientific_name": "Aextoxicon punctatum",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El Olivillo es un \u00e1rbol end\u00e9mico y longevo (viven m\u00e1s de 279 a\u00f1os) de hasta 30 m de altura. Tiene hojas de color verde oscuro por encima y gris por abajo. Posee una flor blanquecina y un fruto de color verde a morado. Se distribuye desde la regi\u00f3n de Coquimbo (Limar\u00ed) hasta Chilo\u00e9 y Palena",
        "conservation_status": "LC"
    },
    {
        "id": 69,
        "beachId": 1,
        "entityId": 6,
        "name": "Boldo",
        "scientific_name": "Peumus boldus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El Boldo es un \u00e1rbol end\u00e9mico, siempreverde y de tama\u00f1o medio (hasta 15 m). Hojas ovoides de color verde brillante por encima y verde p\u00e1lido por abajo. Posee una flor blanquecina y frutos verdes. Utilizada como estimulante digestivo. Lo encuentras desde la regi\u00f3n de Coquimbo a Los Lagos",
        "conservation_status": "LC"
    },
    {
        "id": 70,
        "beachId": 1,
        "entityId": 5,
        "name": "estrella de mar",
        "scientific_name": "Stichaster striatus",
        "image": "/playas//Invertebrados marinos/Stichaster striatus.jpg",
        "author": "Sin autor",
        "details": "La m\u00e1s com\u00fan de las estrellas de mar. De color anaranjado o amarillento. Tiene forma de disco peque\u00f1o con 4 a 7 brazos (usualmente 5).  Se alimenta de moluscos y crust\u00e1ceos,",
        "conservation_status": "NE"
    },
    {
        "id": 71,
        "beachId": 1,
        "entityId": 5,
        "name": "chit\u00f3n",
        "scientific_name": "Chiton granosus",
        "image": "/playas//Invertebrados marinos/Chiton granosus.jpg",
        "author": "Sin autor",
        "details": "Este chit\u00f3n posee placas de color gris o negro y un cintur\u00f3n escamoso y granulado, dividido en dos porciones. Habita roquer\u00edos y grietas en la zona intermareal en sitios expuestos al oleaje. Es herb\u00edvoro y suele alimentarse de luche.",
        "conservation_status": "NE"
    },
    {
        "id": 72,
        "beachId": 1,
        "entityId": 5,
        "name": "an\u00e9mona de mar (actinia)",
        "scientific_name": "Phymactis papillosa",
        "image": "/playas//Invertebrados marinos/Phymactis papillosa.jpg",
        "author": "Sin autor",
        "details": "La an\u00e9mona de mar tiene un cuerpo en forma de cilindro y mide de 3 a 5 cm. Puedes encontrarla de colores verde, rojo o azul. Se alimenta de otros organismos que se desprenden debido al oleaje. Vive adherida a rocas en zonas no expuestas a la luz solar y de alta humedad.",
        "conservation_status": "NE"
    },
    {
        "id": 73,
        "beachId": 1,
        "entityId": 2,
        "name": "chungungo o nutria marina",
        "scientific_name": "Lontra felina",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "Sin descripción",
        "conservation_status": "EN"
    },
    {
        "id": 74,
        "beachId": 1,
        "entityId": 2,
        "name": "ballena sei",
        "scientific_name": "Balaenoptera borealis",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "La ballena sei posee un cuerpo delgado de hasta 20 m de longitud. Es de color gris oscuro en el dorso y gris claro a blanco en el vientre. La aleta dorsal est\u00e1 un poco m\u00e1s adelante que la mayor\u00eda de las ballenas y permite su r\u00e1pida identificaci\u00f3n. ",
        "conservation_status": "EN"
    },
    {
        "id": 75,
        "beachId": 1,
        "entityId": 2,
        "name": "coipo",
        "scientific_name": "Myocastor coypus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El coipo es el roedor m\u00e1s grande de Chile. Es de color caf\u00e9, de cuerpo arqueado, patas cortas, cola redonda y larga. Sus pies y manos poseen membranas natatorias. Prefiere ambientes de agua dulce como lagunas, lagos, esteros, humedales y r\u00edos.",
        "conservation_status": "LC"
    },
    {
        "id": 76,
        "beachId": 1,
        "entityId": 7,
        "name": "huiro negro (chasc\u00f3n)",
        "scientific_name": "Lessonia spicata",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "El huiro negro es el alga de mayor importancia econ\u00f3mica del pa\u00eds. Es de color verde pardusco o casi negro y puede medir hasta 4 m de longitud. Habita en sectores rocosos expuestos y de gran movimiento de agua. ",
        "conservation_status": "NE"
    },
    {
        "id": 77,
        "beachId": 1,
        "entityId": 7,
        "name": "toallita turca (piedra de uva)",
        "scientific_name": "Mastocarpus papillatus",
        "image": "/playas/nodisponible.jpg",
        "author": "Sin autor",
        "details": "La toallita turca o pierda de uva es un alga roja invasora que crece en sustratos rocosos, en zonas intermareales altas y medias. Se cree que fue introducida en cerca de 1980 en cascos de buques asociados al transporte del carb\u00f3n. Se encuentra de Cobquecura a Punta Lavapi\u00e9.",
        "conservation_status": "NE"
    }
]