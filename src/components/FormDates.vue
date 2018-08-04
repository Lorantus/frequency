<template>
    <div>

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
                    lang="fr" format="DD-MM-YYYY"></date-picker>
        </div>

    </div>              
</template>

<script type="text/babel">
import DatePicker from 'vue2-datepicker';
import Selecteur from './Selecteur';
import FormMixin from './FormMixin';

export default {
    components: {
        DatePicker,
        Selecteur
    },
    mixins: [FormMixin]
}
</script>

