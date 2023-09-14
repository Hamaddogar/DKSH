// src/modules/auth/routes.js
import HomePage from './index';

const homeRoutes = [
    {
        path: '/',
        element: <HomePage />,
        exact: true,
    },
    // {
    //     path: '/home/register',
    //     component: RegisterPage,
    //     exact: true,
    // },
];

export default homeRoutes;
