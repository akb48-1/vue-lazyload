const moduleA = {
    namespaced: true,
    state: {
        'name': 'zhangsan'
    },
    getters: {
        say(state) {
            return `my name is ${state.name}`
        }
    },
    mutations: {
        changeName(state, {name}) {
            state.name = name;
        }
    },
    actions: {
        changeName({commit}, {name}) {
            commit('changeName', {name})
        }
    }
}

export default moduleA