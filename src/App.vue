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
import FormDates from './components/FormDates';
import FormFiche from './components/FormFiche';
import FormMixin from './components/FormMixin';
import {VTab, VueTabs} from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';

const mapWatch = (...array) => {
    return array.reduce(function(acculuator, name) {
        acculuator[name] = {
            immediate: true,
            handler(watchName) {
                this.form[name] = watchName;
            }
        };
        return acculuator;
    }, {});
};

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
        VTab,
        VueTabs
    },
    mixins: [FormMixin],
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
    watch: mapWatch(
        'counter', 
        'nom', 
        'responsable',
        'dateEvaluation',
        'frequenceRegulatory',
        'frequenceInternal',
        'dateProchaineEvaluation'
    ),
    methods: {
        handleTabChange(tabIndex){
            this.saveAction = SAVE_ACTIONS[tabIndex];
        },
        save() {
            this.saveAction && this.saveAction(this.form);
        }
    }
}
</script>