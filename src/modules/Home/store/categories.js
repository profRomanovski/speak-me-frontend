import axios from "axios";
import config from "@/config";

export default {
    state: {
        categories: [],
        categoryAuthorId: 0,
        currentCategoryId: 0
    },
    getters: {
        getCategories(state){
            return state.categories
        },
        getCategoryAuthorId(state){
            return state.categoryAuthorId
        },
        getCurrentCategoryId(state){
            return state.currentCategoryId
        },
    },
    actions: {
        async loadCategories(ctx){
            return axios.get(config.hostname+'/api/categories')
                .then((res)=>{
                    ctx.commit('setCategories', res.data)
                });
        },
        async createCategory({dispatch, rootGetters }, data){
            const token = rootGetters.getUserToken
            console.log(token, ' token')
            const configs = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const body = {
                name: data.name,
                image: data.image
            }
            let query = await axios.post(config.hostname+'/api/category-create', body, configs)
            await dispatch('loadCategories')
            return query
        }
    },
    mutations: {
        setCategories(state, categories){
            state.categories = categories
        },
        setCategoryAuthorId(state, id){
            state.categoryAuthorId = id
        },
        setCurrentCategoryId(state, id){
            state.currentCategoryId = id
        }
    },
}