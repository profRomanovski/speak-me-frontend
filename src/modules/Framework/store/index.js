import { createStore } from 'vuex'
import post from "@/modules/Posts/store/post";
const store = createStore({
    modules: {
        post
    }
})
export default store;