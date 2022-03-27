export default {
    state: {
        token: null,
    },
    getters: {
        getUserToken(state){
            return state.token
        }
    },
    actions: {
    },
    mutations: {
        setToken(state, token){
            state.token = token
        }
    },
}