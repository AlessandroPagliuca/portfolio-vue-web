import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/SectionView.vue'),
        },
        // {
        //     path: '/#about-me',
        //     name: 'about-me',
        //     component: () => import('../components/AboutmeComp.vue'),
        // },
        // {
        //     path: '/#skills',
        //     name: 'skills',
        //     component: () => import('../components/SkillsComp.vue'),
        // },
        // {
        //     path: '/#portfolio',
        //     name: 'portfolio',
        //     component: () => import('../components/PortfolioComp.vue'),
        // },
        // {
        //     path: '/#contact-me',
        //     name: 'contact-me',
        //     component: () => import('../components/ContactComp.vue'),
        // },
    ]
})
export default router