import Register from "@/modules/Auth/views/Register";
import Login from "@/modules/Auth/views/Login";

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
            layout: "main"
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta:{
            layout: "main"
        }
    }
]