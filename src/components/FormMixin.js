import { createNamespacedHelpers } from 'vuex';

const {
    mapState: mapStateFiche,
    mapGetters: mapGettersFiche, 
    mapMutations: mapMutationsFiche
} = createNamespacedHelpers('fiche');

export default {
    computed: {
        ...mapStateFiche({
            frequences: state => state.FREQUENCES,
            responsables: state => state.responsables
        }),
        counter: {
            get() {
                return this.getCounter();
            },
            set(counter) {
                this.setCounter(counter);   
            }
        },
        nom: {
            get() {
                return this.getNom();
            },
            set(nom) {
                this.setNom(nom);   
            }
        },
        responsable: {
            get() {
                return this.getResponsable();
            },
            set(responsable) {
                this.setResponsable(responsable);   
            }
        },
        dateEvaluation: {
            get() {
                return this.getDateEvaluation();
            },
            set(dateEvaluation) {
                this.setDateEvaluation(dateEvaluation);   
            }
        },
        frequenceRegulatory: {
            get() {
                return this.getFrequenceRegulatory();
            },
            set(frequence) {
                this.setFrequenceRegulatory(frequence);   
            }
        },
        frequenceInternal: {
            get() {
                return this.getFrequenceInternal();
            },
            set(frequence) {
                this.setFrequenceInternal(frequence);   
            }
        },
        dateProchaineEvaluation: {
            get() {
                return this.getDateProchaineEvaluation();
            },
            set(dateProchaineEvaluation) {
                this.setDateProchaineEvaluation(dateProchaineEvaluation);  
                this.setDateProchaineEvaluationSaisie(dateProchaineEvaluation); 
            }
        }
    },
    methods: {
        ...mapGettersFiche({
            getCounter: 'GET_COUNTER',
            getNom: 'GET_NOM',
            getResponsable: 'GET_RESPONSABLE',
            getDateEvaluation: 'GET_DATE_EVALUATION',
            getFrequenceRegulatory: 'GET_FREQUENCE_REGULATORY',
            getFrequenceInternal: 'GET_FREQUENCE_INTERNAL',
            getDateProchaineEvaluation: 'GET_DATE_PROCHAINE_EVALUATION'
        }),
        ...mapMutationsFiche({
            setCounter: 'UPDATE_COUNTER',
            setNom: 'UPDATE_NOM',
            setResponsable: 'UPDATE_RESPONSABLE',
            setDateEvaluation: 'UPDATE_DATE_EVALUATION',
            setFrequenceRegulatory: 'UPDATE_FREQUENCE_REGULATORY',
            setFrequenceInternal: 'UPDATE_FREQUENCE_INTERNAL',
            setDateProchaineEvaluation: 'UPDATE_DATE_PROCHAINE_EVALUATION',
            setDateProchaineEvaluationSaisie: 'UPDATE_DATE_PROCHAINE_EVALUATION_SAISIE'
        })
    }
}