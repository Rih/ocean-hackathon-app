import { goto } from '$app/navigation';

interface Route {
    name: string;
    title: string;
    uri: string;

}
export const PREFIX: string = ''
export const ROUTES: Route[] = [
    {
        name: 'home',
        title: 'Home',
        uri: '/'
    },
    {
        name: 'search',
        title: 'Buscar',
        uri: '/search'
    },
    {
        name: 'about',
        title: 'Acerca de',
        uri: '/about'
    },
    {
        name: 'terms',
        title: 'Terminos y condiciones',
        uri: '/terms'
    },
    {
        name: 'manual',
        title: 'Manual de buenas prácticas',
        uri: '/manual'
    },
    {
        name: 'credits',
        title: 'Créditos',
        uri: '/credits'
    },
    {
        name: 'beach_contamination',
        title: 'Contaminación',
        uri: '/beach-details/contamination',
    },
    {
        name: 'beach_report',
        title: 'Denunciar',
        uri: '/beach-details/report',
    },
    {
        name: 'beach_bio_fauna',
        title: 'Fauna',
        uri: '/beach-details/biodiversity/fauna',
    },
    {
        name: 'beach_bio_flora',
        title: 'Flora',
        uri: '/beach-details/biodiversity/flora',
    },
    {
        name: 'beach_bio_entity',
        title: 'Entidad',
        uri: '/beach-details/biodiversity/entity',
    },
    {
        name: 'beach_bio_form',
        title: 'Formulario',
        uri: '/beach-details/biodiversity/form',
    },
    {
        name: 'beach_bio_photo',
        title: 'Foto',
        uri: '/beach-details/biodiversity/photo',
    }
]

export const goRoute = (name: string) => {
    const foundRoute = ROUTES.find(r => r.name === name)
    if (!PREFIX) {
        goto(`${foundRoute?.uri}`);
        return;
    }
    return `/${PREFIX}${foundRoute?.uri}`;
}

export const goBack = (defaultRoute = 'home') => {
    history.back();
}