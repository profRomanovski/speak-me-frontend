import Chat from "@/modules/Home/views/Home";
import Registration from "@/modules/User/views/Registration";
import Login from "@/modules/User/views/Login";
import Profile from "@/modules/User/views/Profile";

export default [
    {
        path: '/register',
        name: 'Register',
        component: Registration,
        meta:{
            layout: "centered"
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
            layout: "centered"
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta:{
            layout: "centered"
        }
    }
]