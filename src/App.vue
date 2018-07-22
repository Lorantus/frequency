<template>
    <div class="columns">
        <div class="column is-two-thirds">
            <section class="section">
                <h1 class="title">Fun with Forms in Vue 2.0</h1>
                <p class="subtitle">
                    Learn how to work with forms, including <strong>validation</strong>!
                </p>
                <hr>

                <vue-tabs @tab-change="handleTabChange">
                    <v-tab title="Form 1">
                        <form-fiche/>
                    </v-tab>

                    <v-tab title="Form 2">
                        <form-fiche small/>
                    </v-tab>

                    <v-tab title="Form 3">
                        <form-dates/>
                    </v-tab>
                </vue-tabs>
                
                <br/>

                <div class="field">
                    <div class="control">
                        <button 
                            class="button is-primary"
                            @click="save">Submit</button>
                    </div>
                </div>

            </section>
            

        </div>

        <div class="column">
            <section class="section" id="results">
                <div class="box">
                    <ul>          
                        <!-- loop through all the `form` properties and show their values -->
                        <li v-for="(item, key) in form" :key="key">
                        <strong>{{ key }}:</strong> {{ item }}
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
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('fiche');

const safeNull = value => value ? value.id : null;

const SAVE_ACTIONS = [
    form => {
        console.log("Large save");
        console.log(form);
    },
    form => {
        console.log("Small save");
        console.log(form);
    }
];

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
                responsable: null,
                dateEvaluation: null,
                frequenceRegulatory: null,
                frequenceInternal: null,
                dateProchaineEvaluation: null
            },
            saveAction: SAVE_ACTIONS[0]
        }
    },
    computed: {
        ...mapGetters({
            counter: 'GET_COUNTER',
            nom: 'GET_NOM',
            dateEvaluation: 'GET_DATE_EVALUATION',
            responsable: 'GET_RESPONSABLE',
            frequenceRegulatory: 'GET_FREQUENCE_REGULATORY',
            frequenceInternal: 'GET_FREQUENCE_INTERNAL',
            dateProchaineEvaluation: 'GET_DATE_PROCHAINE_EVALUATION'
        })
    },
    watch: {
        counter: { 
            handler(counter) {
                this.form.counter = counter;
            },
            immediate: true
        },
        nom: { 
            handler(nom) {
                this.form.nom = nom;
            },
            immediate: true
        },
        dateEvaluation: { 
            handler(dateEvaluation) {
                this.form.dateEvaluation = dateEvaluation;
            },
            immediate: true
        },
        responsable: { 
            handler(responsable) {
                this.form.responsable = safeNull(responsable);
            },
            immediate: true
        },
        frequenceRegulatory: { 
            handler(frequence) {
                this.form.frequenceRegulatory = safeNull(frequence);
            },
            immediate: true
        },
        frequenceInternal: { 
            handler(frequence) {
                this.form.frequenceInternal = safeNull(frequence);
            },
            immediate: true
        },
        dateProchaineEvaluation: { 
            handler(dateProchaineEvaluation) {
                this.form.dateProchaineEvaluation = dateProchaineEvaluation;
            },
            immediate: true
        },
    },
    methods: {
        handleTabChange(tabIndex, newTab, oldTab){
            this.saveAction = SAVE_ACTIONS[tabIndex];
        },
        save() {
            this.saveAction && this.saveAction(this.form);
        }
    }
}
</script>