import { createStore } from 'vuex'
import messages from "@/modules/Chat/store/messages";
import rooms from "@/modules/Chat/store/rooms";
import sidebar from "@/modules/Main/store/sidebar";
const store = createStore({
    modules: {
        messages,
        sidebar,
        rooms
    }
})
export default store;