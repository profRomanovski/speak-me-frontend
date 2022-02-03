export default {
    state: {
        messages: [
            {
                id: 0,
                body: "Hello, Roman",
                userId: 12
            },
            {
                id: 1,
                body: "Hello, Margo",
                userId: 11
            },
            {
                id: 2,
                body: "How are you Roman. I heard you was ill. Is health is ok? Can I help you?",
                userId: 12
            },
            {
                id: 3,
                body: "Not sure. I'm bad. So, I will watch a film, than I will go for a walk. Maybe, after that" +
                    "I will feel myself more better. However, how are you? нннннннннннннннннннннннннннннннннннннн",
                userId: 11
            },
            {
                id: 4,
                body: "Great! Thank you :)",
                userId: 12
            },
            {
                id: 5,
                body: "Great! Thank you :)",
                userId: 11
            },
            {
                id: 6,
                body: "Great! Thank you :)",
                userId: 12
            }
        ]
    },
    getters: {
        allMessages(state){
            return state.messages
        },
    },
    actions: {

    },
    mutations: {
        createMessage(state, message){
            state.messages.unshift(message)
        }
    },
}