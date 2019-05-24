import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogged: false,
    },
    getters: {
        getLoginStatus: (state) => {
            return state.isLogged;
        },
    },
    mutations: {
        changeLoginStatus(state, isLogged) {
            state.isLogged = isLogged;
        },
    },
    actions: {
        setLoginStatus(context, payload) {
            context.commit('changeLoginStatus', payload.isLogged);
        },
    },
});

export default store;
