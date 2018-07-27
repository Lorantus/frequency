import { FREQUENCES, DEFAULT_FREQUENCE } from '../../utils/Frequences.es6';

const state = {
    FREQUENCES,
    responsables: [],
    dateProchaineEvaluationSaisie: null,
    form: {
        counter: 0,
        nom: null,
        dateEvaluation: null,
        responsable: null,
        frequenceRegulatory: DEFAULT_FREQUENCE.name,
        frequenceInternal: DEFAULT_FREQUENCE.name,
        dateProchaineEvaluation: null
    }
};

const mutations = (function () {
    const computeDateEvaluation = function(state) {
        const dateEvaluation = state.form.dateEvaluation;
        const dates = [state.form.frequenceRegulatory, state.form.frequenceInternal]
            .filter(frequence => frequence != DEFAULT_FREQUENCE.name)
            .map(frequence => FREQUENCES[frequence])
            .map(frequence => frequence && frequence.apply(dateEvaluation));
        state.form.dateProchaineEvaluation = dateEvaluation && dates.length ? new Date(Math.min(...dates)) : state.dateProchaineEvaluationSaisie;
    }
    
    return {
        UPDATE_RESPONSABLES(state, responsables) {
            state.responsables = responsables;
        },
        UPDATE_COUNTER(state, counter) {
            state.form.counter = counter;
        },
        UPDATE_NOM(state, nom) {
            state.form.nom = nom;
        },
        UPDATE_DATE_EVALUATION(state, dateEvaluation) {
            state.form.dateEvaluation = dateEvaluation;
            computeDateEvaluation(state);
        },
        UPDATE_RESPONSABLE(state, responsable) {
            state.form.responsable = responsable;
        },
        UPDATE_FREQUENCE_REGULATORY(state, frequenceRegulatory) {
            state.form.frequenceRegulatory = frequenceRegulatory || DEFAULT_FREQUENCE.name;
            computeDateEvaluation(state);
        },
        UPDATE_FREQUENCE_INTERNAL(state, frequenceInternal) {
            state.form.frequenceInternal = frequenceInternal || DEFAULT_FREQUENCE.name;
            computeDateEvaluation(state);
        },
        UPDATE_DATE_PROCHAINE_EVALUATION(state, dateProchaineEvaluation)  {
            state.form.dateProchaineEvaluation = dateProchaineEvaluation;
        },
        UPDATE_DATE_PROCHAINE_EVALUATION_SAISIE(state, dateProchaineEvaluationSaisie)  {
            if(!state.dateProchaineEvaluationSaisie || !state.form.dateEvaluation) {
                state.dateProchaineEvaluationSaisie = dateProchaineEvaluationSaisie;
            }
        }
    }
})();

const getters = {
    GET_COUNTER: state => state.form.counter,
    GET_NOM: state => state.form.nom,
    GET_RESPONSABLE: state => state.form.responsable,
    GET_DATE_EVALUATION: state => state.form.dateEvaluation,
    GET_FREQUENCE_REGULATORY: state => state.form.frequenceRegulatory,
    GET_FREQUENCE_INTERNAL: state => state.form.frequenceInternal,
    GET_DATE_PROCHAINE_EVALUATION: state => state.form.dateProchaineEvaluation
};

export default {
    namespaced: true,
    state,
    mutations,
    getters
};