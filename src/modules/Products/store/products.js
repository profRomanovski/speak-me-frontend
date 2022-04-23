import axios from "axios";
import config from "@/config";

export default {
    state: {
        products: [],
    },
    getters: {
        getProducts(state){
            return state.products
        },
    },
    actions: {
        async loadProducts(ctx, id){
            return axios.get(config.hostname+'/api/products', {
                params: {
                    categoryId: id
                }
            })
                .then((res)=>{
                    ctx.commit('setProducts', res.data)
                });
        },
        async createProduct({dispatch, rootGetters }, data){
            const categoryId = rootGetters.getCurrentCategoryId
            console.log(categoryId, ' catId')
            const body = {
                name: data.name,
                image: data.image,
                category_id: categoryId
            }
            let query = await axios.post(config.hostname+'/api/product-create', body)
            await dispatch('loadProducts')
            return query
        }
    },
    mutations: {
        setProducts(state, product){
            state.products = product
        }
    },
}