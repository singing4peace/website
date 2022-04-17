import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        locale: "de",
    },
    mutations: {
        setLocale(state, locale: string) {
            state.locale = locale;
        },
    },
    actions: {
    },
    modules: {
    },
});