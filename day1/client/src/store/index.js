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
        async getList(store, options) {
            const { $request } = Vue.prototype;
            let res = await $request(options.method, options.url, options.data);
            const { code, result } = res.data;
            if (code === 0) {
                store.commit('setList', result);
                return;
            }
        },
    },
    modules: {},
});
