<template>
    <div>

        <div class="field">
            <label class="label">Counter</label>
            <div>
                <counter v-model="counter" hide-text/>
            </div>
        </div>

        <div class="field">
            <label class="label">Nom</label>
            <div class="control">
                <input v-model="nom" class="input" type="text" placeholder="Entrez un nom"/>
            </div>
        </div>


        <div class="columns">

            <div class="column">
                <div class="field">
                    <label class="label">Date évaluation</label>
                    <date-picker 
                            v-model="dateEvaluation"
                            lang="fr" format="DD-MM-YYYY"></date-picker>
                </div>
            </div>

            <div class="column">
                <div class="field">
                    <label class="label">Responsable</label>
                    <div class="control">
                        <div class="select">
                            <selecteur
                                v-model="responsable"
                                :items="responsables"
                                :label="responsable => `${responsable.nom}, ${responsable.prenom}`"
                                placeholder="Aucun">
                            </selecteur>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="columns" v-if="!small">

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
                    lang="fr" format="DD-MM-YYYY"></date-picker>
        </div>

    </div>              
</template>

<script type="text/babel">
import Counter from './Counter';
import DatePicker from 'vue2-datepicker';
import FormMixin from './FormMixin.es6';
import Selecteur from './Selecteur';

export default {
    components: {
        Counter,
        DatePicker,
        Selecteur
    },
    mixins: [FormMixin],
    props: {
        small: Boolean
    }
}
</script>

