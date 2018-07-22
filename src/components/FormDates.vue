<template>
    <div>

        <!-- form starts here -->
        <div class="field">
            <label class="label">Date évaluation</label>
            <date-picker 
                    v-model="dateEvaluation"
                    lang="fr" format="DD-MM-YYYY"></date-picker>
        </div>

        <div class="columns">

            <div class="column">
                <div class="field">
                    <label class="label">Fréquence Régulatory</label>
                    <div class="control">
                        <div class="select">
                            <frequence-selecteur 
                                v-model="frequenceRegulatory"
                                :frequences="frequences"/>                 
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="field">
                    <label class="label">Fréquence Interne</label>
                    <div class="control">
                        <div class="select">
                            <frequence-selecteur 
                                v-model="frequenceInternal"
                                :frequences="frequences"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="field">
            <label class="label">Date prochaine évaluation</label>
            <date-picker 
                    v-model="dateProchaineEvaluation"
                    lang="fr" format="DD-MM-YYYY"
                    @change="setDateProchaineEvaluation"></date-picker>
        </div>

    </div>              
</template>

<script>
import Counter from './Counter';
import DatePicker from 'vue2-datepicker';
import FrequenceSelecteur from './FrequenceSelecteur';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    components: {
        Counter,
        DatePicker,
        FrequenceSelecteur
    },
    data() {
        return {
            dateProchaineEvaluationSaisie: null
        }
    },
    computed: {
        ...mapState({
            frequences: state => state.FREQUENCES
        }),
        counter: {
            get() {
                return this.$store.getters.getCounter;
            },
            set(counter) {
                this.$store.commit('updateCounter', counter);   
            }
        },
        nom: {
            get() {
                return this.$store.getters.getNom;
            },
            set(nom) {
                this.$store.commit('updateNom', nom);   
            }
        },
        dateEvaluation: {
            get() {
                return this.$store.getters.getDateEvaluation;
            },
            set(dateEvaluation) {
                this.$store.commit('updateDateEvaluation', dateEvaluation);   
            }
        },
        frequenceRegulatory: {
            get() {
                return this.$store.getters.getFrequenceRegulatory;
            },
            set(frequence) {
                this.$store.commit('updateFrequenceRegulatory', frequence);   
            }
        },
        frequenceInternal: {
            get() {
                return this.$store.getters.getFrequenceInternal;
            },
            set(frequence) {
                this.$store.commit('updateFrequenceInternal', frequence);   
            }
        },
        dateProchaineEvaluation: {
            get() {
                return this.$store.getters.getDateProchaineEvaluation;
            },
            set(dateProchaineEvaluation) {
                this.$store.commit('updateDateProchaineEvaluation', dateProchaineEvaluation);   
            }
        }        
    },
    watch: {
        dateEvaluation(dateEvaluation) {
            this.computeDateEvaluation(this.frequenceRegulatory, this.frequenceInternal);
        },

        frequenceRegulatory(frequence) {
            this.computeDateEvaluation(frequence, this.frequenceInternal);
        },

        frequenceInternal(frequence) {
            this.computeDateEvaluation(frequence, this.frequenceRegulatory);
        }
    },
    methods: {
        setDateProchaineEvaluation(dateEvaluation) {
            if(!this.dateProchaineEvaluationSaisie || !dateEvaluation) {
                this.dateProchaineEvaluationSaisie = dateEvaluation;
            }
        },

        computeDateEvaluation(...frequences) {
            const dateEvaluation = this.dateEvaluation;
            const dates = frequences
                .filter(frequence => frequence.id != 'NONE')
                .map(frequence => frequence.apply(dateEvaluation)); 
            this.dateProchaineEvaluation = dates.length ? new Date(Math.min(...dates)) : this.dateProchaineEvaluationSaisie;
        }
    }
}
</script>

