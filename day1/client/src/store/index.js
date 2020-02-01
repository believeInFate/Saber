import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: [],
    },
    mutations: {
        setList(state, options) {
            state.list = [...options];
        },
    },
    actions: {
        async getList(store) {
            const { $request } = Vue.prototype;
            let res = await $request('get', '/list');
            const { code, result } = res.data;
            console.log(result);

            if (code === 0) {
                store.commit('setList', result);
            }
        },
    },
    modules: {},
});
