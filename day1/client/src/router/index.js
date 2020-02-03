import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/List.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/Detail.vue'),
    },
    {
        path: '*',
        redirect: '/login',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
