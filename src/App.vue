<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <section class="section">
                <h1 class="title">Fun with Forms in Vue 2.0</h1>
                <p class="subtitle">
                    Learn how to work with forms, including <strong>validation</strong>!
                </p>
                <hr>

                <vue-tabs>
                    <v-tab title="form 1">
                        <form-fiche large/>
                    </v-tab>

                    <v-tab title="form 2">
                        <form-fiche small/>
                    </v-tab>

                    <v-tab title="form 3">
                        <form-dates/>
                    </v-tab>
                </vue-tabs>

            </section>

        </div>

        <div class="column">
            <section class="section" id="results">
                <div class="box">
                    <ul>          
                        <!-- loop through all the `form` properties and show their values -->
                        <li v-for="(item, k) in form" :key="k">
                        <strong>{{ k }}:</strong> {{ item }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>

    </div>
</template>

<script type="text/babel">
import {VueTabs, VTab} from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';
import FormFiche from './components/FormFiche';
import FormDates from './components/FormDates';
import {DEFAULT_FREQUENCE} from './components/Frequences.es6';
import { mapGetters } from 'vuex';

const TODAY = new Date();

export default {
    components: {
        FormFiche,
        FormDates,
        VueTabs,
        VTab
    },
    data() {
        return {
            form : {
                counter: 0,
                nom: null,
                dateEvaluation: null,
                frequenceRegulatory: DEFAULT_FREQUENCE,
                frequenceInternal: DEFAULT_FREQUENCE,
                dateProchaineEvaluation: null
            }
        }
    },
    computed: {
        ...mapGetters({
            counter: 'getCounter',
            nom: 'getNom',
            dateEvaluation: 'getDateEvaluation',
            frequenceRegulatory: 'getFrequenceRegulatory',
            frequenceInternal: 'getFrequenceInternal',
            dateProchaineEvaluation: 'getDateProchaineEvaluation'
        })
    },
    watch: {
        counter(counter) {
            this.form.counter = counter;
        },
        nom(nom) {
            this.form.nom = nom;
        },
        dateEvaluation(dateEvaluation) {
            this.form.dateEvaluation = dateEvaluation;
        },
        frequenceRegulatory(frequence) {
            this.form.frequenceRegulatory = frequence;
        },
        frequenceInternal(frequence) {
            this.form.frequenceInternal = frequence;
        },
        dateProchaineEvaluation(dateProchaineEvaluation) {
            this.form.dateProchaineEvaluation = dateProchaineEvaluation;
        }
    }
}
</script>