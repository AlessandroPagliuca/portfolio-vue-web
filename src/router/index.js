import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        //     {
        //         path: '/about-me',
        //         name: 'about-me',
        //         component: () => import('../views/AboutmeView.vue'),
        //     },
        //     {
        //         path: '/skills',
        //         name: 'skills',
        //         component: () => import('../views/SkillsView.vue'),
        //     },
        //     {
        //         path: '/portfolio',
        //         name: 'portfolio',
        //         component: () => import('../views/PortfolioView.vue'),
        //     },
    ]
})
export default router