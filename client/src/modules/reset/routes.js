// src/modules/auth/routes.js
import ResetPage from './index';

const ResetRoutes = [
    {
        path: '/reset/:token',
        element: <ResetPage />,
        exact: true,
    },
    // {
    //     path: '/Reset/register',
    //     component: RegisterPage,
    //     exact: true,
    // },
];

export default ResetRoutes;
