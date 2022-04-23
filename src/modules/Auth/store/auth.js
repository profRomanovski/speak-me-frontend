export default {
    state: {
        token: null,
        userId: -1
    },
    getters: {
        getUserToken(state){
            return state.token
        },
        getUserId(state){
            return state.userId
        }
    },
    actions: {
    },
    mutations: {
        setToken(state, token){
            state.token = token
        },
        setUserId(state, id){
            state.userId = id
        }
    },
}