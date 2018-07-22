import Vue from 'vue';
import Vuex from 'vuex';
import {FREQUENCES, DEFAULT_FREQUENCE} from './components/Frequences.es6';

Vue.use(Vuex)

const state = {
    FREQUENCES,
    form: {
        counter: 0,
        nom: null,
        dateEvaluation: null,
        frequenceRegulatory: DEFAULT_FREQUENCE,
        frequenceInternal: DEFAULT_FREQUENCE,
        dateProchaineEvaluation: null
    }
};

const mutations = {
    updateCounter(state, counter) {
        state.form.counter = counter;
    },
    updateNom(state, nom) {
        state.form.nom = nom;
    },
    updateDateEvaluation(state, dateEvaluation) {
        state.form.dateEvaluation = dateEvaluation;
    },
    updateFrequenceRegulatory(state, frequenceRegulatory) {
        state.form.frequenceRegulatory = frequenceRegulatory || DEFAULT_FREQUENCE;
    },
    updateFrequenceInternal(state, frequenceInternal) {
        state.form.frequenceInternal = frequenceInternal || DEFAULT_FREQUENCE;
    },
    updateDateProchaineEvaluation(state, dateProchaineEvaluation) {
        state.form.dateProchaineEvaluation = dateProchaineEvaluation;
    }
};

const getters = {
    getCounter: state => state.form.counter,
    getNom: state => state.form.nom,
    getDateEvaluation: state => state.form.dateEvaluation,
    getFrequenceRegulatory: state => state.form.frequenceRegulatory,
    getFrequenceInternal: state => state.form.frequenceInternal,
    getDateProchaineEvaluation: state => state.form.dateProchaineEvaluation
};

export default new Vuex.Store({
    state,
    mutations,
    getters
});