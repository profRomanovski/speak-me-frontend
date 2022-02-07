export default {
    state: {
        rooms: [
            {
                id: 0,
                name: "Elogic",
                userId: 12
            },
            {
                id: 1,
                name: "Together",
                userId: 11
            },
            {
                id: 2,
                name: "Our group",
                userId: 12
            },
            {
                id: 3,
                name: "Cripto",
                userId: 11
            },
            {
                id: 4,
                name: "Healthy foods and me",
                userId: 12
            },
            {
                id: 5,
                name: "Monogo team",
                userId: 11
            },
            {
                id: 6,
                name: "Stalker",
                userId: 12
            }
        ]
    },
    getters: {
        allRooms(state){
            return state.rooms
        },
    },
    actions: {

    },
    mutations: {
        createRoom(state, room){
            state.rooms.unshift(room)
        }
    },
}