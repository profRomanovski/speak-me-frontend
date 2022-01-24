import Home from "@/modules/Posts/views/Home";

export default [
    {
        path: '/about',
        name: 'About',
        component: () => import('@/modules/Posts/views/About.vue'),
        meta: {
            layout: "main"
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            layout: "main"
        }
    }
]