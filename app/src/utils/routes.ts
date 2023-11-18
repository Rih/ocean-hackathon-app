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
        uri: '/beach/[id]',
    },
    {
        name: 'beach_contamination',
        title: 'Contaminación',
        uri: '/beach/[id]/contamination',
    },
    {
        name: 'beach_opinion',
        title: 'Opinión',
        uri: '/beach/[id]/opinion',
    },
    {
        name: 'beach_evaluation',
        title: 'Evaluaciones',
        uri: '/beach/[id]/evaluations',
    },
    {
        name: 'beach_contamination_evaluate',
        title: 'Evalúa tu playa',
        uri: '/beach/[id]/contamination/evaluate',
    },
    {
        name: 'beach_contamination_schedule',
        title: 'Agenda limpieza',
        uri: '/beach/[id]/contamination/schedule',
    },
    {
        name: 'beach_contamination_knowmore',
        title: 'Saber más',
        uri: '/beach/[id]/contamination/know-more',
    },
    {
        name: 'beach_contamination_feedback',
        title: 'Feedback',
        uri: '/beach/[id]/contamination/feedback',
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
        title: 'Categorías',
        uri: '/beach/[id]/biodiversity/[entityId]/entity',
    },
    {
        name: 'beach_bio_entity_organism',
        title: 'Detalle organismo',
        uri: '/beach/[id]/biodiversity/[entityId]/entity/[organismId]',
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
    entityId?: number | null,
    organismId?: number | null,
}
export const goRoute = (
    name: string,
    { id = null, entityId = null, organismId = null }: ExtraRouteParams
) => {
    const foundRoute = ROUTES.find(r => r.name === name)
    let completeRoute = foundRoute?.uri!;
    if (id) {
        completeRoute = `${completeRoute.replace(/\[id\]/, String(id))}`;
    }
    if (entityId) {
        completeRoute = `${completeRoute.replace(/\[entityId\]/, String(entityId))}`;
    }
    if (organismId) {
        completeRoute = `${completeRoute.replace(/\[organismId\]/, String(organismId))}`;

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