import { createStore } from 'vuex'
import messages from "@/modules/Chat/store/messages";
import sidebar from "@/modules/Main/store/sidebar";
const store = createStore({
    modules: {
        messages,
        sidebar
    }
})
export default store;