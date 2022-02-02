import { createStore } from 'vuex'
import post from "@/modules/Posts/store/post";
import sidebar from "@/modules/Main/store/sidebar";
const store = createStore({
    modules: {
        post,
        sidebar
    }
})
export default store;