import { lazy } from 'react';

export const PageRoutes = {
    MainPage: {
        route: '/main',
        name: 'main',
        Component: lazy(() => import('../pages/Main/Main')),
        options: {},
        routeProps: {},
    },
    Details: {
        route: '/details/:id',
        name: 'details',
        Component: lazy(() => import('../pages/Details/Details')),
        options: {},
        routeProps: {
            exact: true
        },

    },
};
