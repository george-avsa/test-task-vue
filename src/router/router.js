import Main from '@/pages/Main';
import Contacts from '@/pages/Contacts';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/contacts',
        component: Contacts
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;