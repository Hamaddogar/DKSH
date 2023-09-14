import React from 'react';
//layouts
import PublicLayout from './layout/Public';
// pages
import NotFound from './components/not-found';
import homeRoutes from './modules/home/routes';
import JobRoutes from './modules/jobs/routes';
import NetworkRoutes from './modules/network/routes';
import ResetRoutes from './modules/reset/routes';

const routes = [
    {
        path: '/',
        element: <PublicLayout />,
        children: [...homeRoutes, ...JobRoutes, ...NetworkRoutes, ...ResetRoutes],
    },
    {
        path: '*',
        element: <PublicLayout />,
        children: [{ path: '*', element: <NotFound /> }],
    },
];

export default routes;
