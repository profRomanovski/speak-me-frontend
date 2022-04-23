import { createStore } from 'vuex'
import messages from "@/modules/Home/store/messages";
import categories from "@/modules/Home/store/categories";
import sidebar from "@/modules/Main/store/sidebar";
import auth from "@/modules/Auth/store/auth";
import products from "@/modules/Products/store/products";

const store = createStore({
    modules: {
        messages,
        sidebar,
        categories,
        auth,
        products
    }
})
export default store;