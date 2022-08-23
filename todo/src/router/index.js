import homeRoute from './homeRoute';
import todoRoute from './todoRoute';
import { createWebHistory, createRouter } from 'vue-router';
const routes = [...homeRoute, ...todoRoute];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
