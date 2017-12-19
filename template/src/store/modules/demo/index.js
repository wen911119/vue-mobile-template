const Demo = {
    namespaced: true,
    state() {
        return {
            count: 0
        }
    },
    actions: {
        add({ commit }, num) {
            commit({
                type: 'compute',
                num
            })
        }
    },
    getters: {

    },
    mutations: {
        compute(state, payload) {
            state.count += parseInt(payload.num)
        }
    },
    modules: {

    }
}

export default Demo