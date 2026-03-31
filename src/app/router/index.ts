import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/',
            component: () => import('@/views/DashboardLayout.vue'),
            redirect: '/dashboard',
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/DashboardView.vue')
                },
                {
                    path: 'subscriptions',
                    name: 'subscriptions',
                    component: () => import('@/views/SubscriptionsView.vue')
                },
                {
                    path: 'profiles',
                    name: 'profiles',
                    component: () => import('@/views/ProfilesView.vue')
                },
                {
                    path: 'nodes',
                    name: 'nodes',
                    component: () => import('@/views/NodesView.vue')
                }
            ]
        }
    ]
});

export default router;
