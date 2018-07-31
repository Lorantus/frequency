import Vue from 'vue';
import Vuex from 'vuex';
import fiche from './modules/fiche.es6';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        fiche
    }
});