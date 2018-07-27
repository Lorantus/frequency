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
                            <selecteur 
                                v-model="frequenceRegulatory"
                                :items="frequences"
                                option="name"
                                label="label"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="field">
                    <label class="label">Fréquence Interne</label>
                    <div class="control">
                        <div class="select">
                            <selecteur 
                                v-model="frequenceInternal"
                                :items="frequences"
                                option="name"
                                label="label"/>
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

<script type="text/babel">
import DatePicker from 'vue2-datepicker';
import Selecteur from './Selecteur';
import { mapState, mapMutations, mapGetters } from 'vuex';
import { MODULE_VUEX_FICHE } from '../store/store.es6.js';
import moment from 'moment';

export default {
    components: {
        DatePicker,
        Selecteur
    },
    computed: {
        ...mapState(MODULE_VUEX_FICHE.module, {
            frequences: state => state.FREQUENCES
        }),
        dateEvaluation: {
            get() {
                return this.$store.getters[MODULE_VUEX_FICHE.apply('GET_DATE_EVALUATION')];
            },
            set(dateEvaluation) {
                this.$store.commit(MODULE_VUEX_FICHE.apply('UPDATE_DATE_EVALUATION'), dateEvaluation);   
            }
        },
        frequenceRegulatory: {
            get() {
                return this.$store.getters[MODULE_VUEX_FICHE.apply('GET_FREQUENCE_REGULATORY')];
            },
            set(frequence) {
                this.$store.commit(MODULE_VUEX_FICHE.apply('UPDATE_FREQUENCE_REGULATORY'), frequence);   
            }
        },
        frequenceInternal: {
            get() {
                return this.$store.getters[MODULE_VUEX_FICHE.apply('GET_FREQUENCE_INTERNAL')];
            },
            set(frequence) {
                this.$store.commit(MODULE_VUEX_FICHE.apply('UPDATE_FREQUENCE_INTERNAL'), frequence);   
            }
        },
        dateProchaineEvaluation: {
            get() {
                return this.$store.getters[MODULE_VUEX_FICHE.apply('GET_DATE_PROCHAINE_EVALUATION')];
            },
            set(dateProchaineEvaluation) {
                this.$store.commit(MODULE_VUEX_FICHE.apply('UPDATE_DATE_PROCHAINE_EVALUATION'), dateProchaineEvaluation);   
            }
        }        
    },
    methods: {
        setDateProchaineEvaluation(dateEvaluation) {
            this.$store.commit(MODULE_VUEX_FICHE.apply('UPDATE_DATE_PROCHAINE_EVALUATION_SAISIE'), dateEvaluation)
        }
    }
}
</script>

