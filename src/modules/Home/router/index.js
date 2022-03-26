import Chat from "@/modules/Home/views/Home";
import CreateCategory from "@/modules/Home/views/CreateCategory";

export default [
    {
        path: '/',
        name: 'Chat',
        component: Chat,
        meta:{
            layout: "main"
        }
    },
    {
        path: '/create-collection',
        name: 'CreateCategory',
        component: CreateCategory,
        meta:{
            layout: "main"
        }
    }
]