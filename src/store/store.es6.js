import Vue from 'vue';
import Vuex, { mapActions } from 'vuex';
import fiche from './modules/fiche.es6';

Vue.use(Vuex)

const moduleBuilder = (module) => {
    return {
        module,
        apply: name => `${module}/${name}`
    }
};

export const MODULE_VUEX_FICHE = moduleBuilder('fiche');

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        fiche
    }
});