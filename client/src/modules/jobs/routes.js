// src/modules/auth/routes.js
import JobPage from './index';

const JobRoutes = [
    {
        path: '/jobs',
        element: <JobPage />,
        exact: true,
    },
];

export default JobRoutes;
