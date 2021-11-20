import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movie/:id',
        name: 'MovieDetail',
        props: true,
        component: () => import(/* webpackChunkName: "movieDetail" */ '../views/MovieDetail.vue')
    },
    {
        path: '/bookmarks',
        name: 'BookMarks',
        component: () => import(/* webpackChunkName: "Bookmarks" */ '../views/Bookmarks.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
