import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'signup',
        component: () => import('./components/Registration.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/Login.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('./components/ForgotPassword.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./components/Table.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/Dashboard.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router