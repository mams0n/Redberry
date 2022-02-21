import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

export const PageRoutes = {
    Login: {
        route: '/login',
        name: 'login',
        Component: lazy(() => import('../pages/Login/Login')),
        options: {},
        routeProps: {},
    },
    TableView: {
        route: '/tableview',
        name: 'tableview',
        Component: lazy(() => import('../pages/Table/TableView')),
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
