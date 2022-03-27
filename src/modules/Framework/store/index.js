import { createStore } from 'vuex'
import messages from "@/modules/Home/store/messages";
import rooms from "@/modules/Home/store/rooms";
import sidebar from "@/modules/Main/store/sidebar";
import auth from "@/modules/Auth/store/auth";

const store = createStore({
    modules: {
        messages,
        sidebar,
        rooms,
        auth
    }
})
export default store;