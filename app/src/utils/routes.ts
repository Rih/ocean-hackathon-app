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
        name: 'beach_index',
        title: 'Playa',
        uri: '/beach',
    },
    {
        name: 'beach_contamination',
        title: 'Contaminación',
        uri: '/beach/[id]/contamination',
    },
    {
        name: 'beach_report',
        title: 'Denunciar',
        uri: '/beach/[id]/report',
    },
    {
        name: 'beach_report_contamination',
        title: 'Denunciar contaminación',
        uri: '/beach/[id]/report/contamination',
    },
    {
        name: 'beach_report_fauna',
        title: 'Denunciar fauna',
        uri: '/beach/[id]/report/fauna',
    },
    {
        name: 'beach_report_block',
        title: 'Denunciar bloqueo acceso',
        uri: '/beach/[id]/report/access',
    },
    {
        name: 'beach_bio_index',
        title: 'Biodiversidad',
        uri: '/beach/[id]/biodiversity',
    },
    {
        name: 'beach_bio_flora',
        title: 'Flora',
        uri: '/beach/[id]/biodiversity/flora',
    },
    {
        name: 'beach_bio_fauna',
        title: 'Fauna',
        uri: '/beach/[id]/biodiversity/fauna',
    },
    {
        name: 'beach_bio_entity',
        title: 'Entidad',
        uri: '/beach/[id]/biodiversity/entity',
    },
    {
        name: 'beach_bio_form',
        title: 'Formulario',
        uri: '/beach/[id]/biodiversity/form',
    },
    {
        name: 'beach_bio_photo',
        title: 'Foto',
        uri: '/beach/[id]/biodiversity/photo',
    }
]

type ExtraRouteParams = {
    id?: number | null,
}
export const goRoute = (
    name: string,
    { id = null }: ExtraRouteParams
) => {
    const foundRoute = ROUTES.find(r => r.name === name)
    let completeRoute = foundRoute?.uri!;
    if (id) {
        completeRoute = `${completeRoute.replace(/\[id\]/, String(id))}`;
    }
    if (!PREFIX) {
        goto(completeRoute);
        return;
    }
    return `/${PREFIX}${completeRoute}`;
}

export const goBack = (defaultRoute: string = 'home') => {
    history.back();
}