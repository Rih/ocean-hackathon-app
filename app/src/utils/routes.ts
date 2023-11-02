import { goto } from '$app/navigation';

export const PREFIX = ''
export const ROUTES = [
    {
        name: 'login',
        uri: '/login'
    },
    {
        name: 'home',
        uri: '/'
    },
    {
        name: 'search',
        uri: '/search'
    },
    {
        name: 'about',
        uri: '/about'
    },
    {
        name: 'terms',
        uri: '/terms'
    },
    {
        name: 'terms',
        uri: '/terms'
    },
    {
        name: 'manual',
        uri: '/manual'
    },
    {
        name: 'credits',
        uri: '/credits'
    },
    {
        name: 'beach_contamination',
        uri: '/beach-details/contamination',
    },
    {
        name: 'beach_report',
        uri: '/beach-details/report',
    },
    {
        name: 'beach_bio_fauna',
        uri: '/beach-details/biodiversity/fauna',
    },
    {
        name: 'beach_bio_flora',
        uri: '/beach-details/biodiversity/flora',
    },
    {
        name: 'beach_bio_entity',
        uri: '/beach-details/biodiversity/entity',
    },
    {
        name: 'beach_bio_form',
        uri: '/beach-details/biodiversity/form',
    },
    {
        name: 'beach_bio_photo',
        uri: '/beach-details/biodiversity/photo',
    }
]

export const goRoute = (name: string) => {
    const foundRoute = ROUTES.find(r => r.name === name)
    if (!PREFIX) {
        goto(`${foundRoute?.uri}`);
    }
    return `/${PREFIX}${foundRoute?.uri}`;
}

export const goBack = (defaultRoute = 'home') => {
    history.back();
}