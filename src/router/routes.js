export const routes = [
    {
        path: '/',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/admin/DashBoard.vue'),
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../views/admin/Users.vue'),
    },
    {
        path: '/payments',
        name: 'payments',
        component: () => import('../views/admin/Payments.vue'),
    },
]