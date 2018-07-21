<template>
  <div class="columns">
    <div class="column is-two-thirds">

        <section class="section">
          <h1 class="title">Fun with Forms in Vue 2.0</h1>
          <p class="subtitle">
            Learn how to work with forms, including <strong>validation</strong>!
          </p>
          <hr>      
          
          <!-- form starts here -->
          <section>
            <div class="field">
              <label class="label">Counter</label>
              <div>
                <counter v-model="form.counter"/>
              </div>
            </div>


            <div class="field">
              <label class="label">Date évaluation</label>
              <date-picker 
                    v-model="form.dateEvaluation"
                    lang="fr" format="DD-MM-YYYY"></date-picker>
            </div>

            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Fréquence Régulatory</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="form.frequenceRegulatory">
                        <option 
                              v-for="frequence in frequences" 
                              :key="frequence.id"
                              v-bind:value="frequence.id">
                          {{ frequence.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="field">
                  <label class="label">Fréquence Interne</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="form.frequenceInternal">
                        <option 
                              v-for="frequence in frequences" 
                              :key="frequence.id"
                              v-bind:value="frequence.id">
                          {{ frequence.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="field">
              <label class="label">Date prochaine évaluation</label>
              <date-picker 
                    v-model="form.dateProchaineEvaluation"
                    lang="fr" format="DD-MM-YYYY"></date-picker>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary">Submit</button>
              </div>
            </div>           

          </section>
          
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
import DatePicker from 'vue2-datepicker';
import Counter from './components/counter';
import {FREQUENCES, DEFAULT_FREQUENCE} from './Frequences.es6';

export default {
  components: { 
    Counter,
    DatePicker
  },
  data() {
    return {
      form : {
        counter: 0,
        dateEvaluation: new Date(),
        frequenceRegulatory: DEFAULT_FREQUENCE.id,
        frequenceInternal: DEFAULT_FREQUENCE.id,
        dateProchaineEvaluation: null
      },
      frequences: FREQUENCES
    }
  },
  computed: {
    frequenceRegulatoryEnCours() {
      return FREQUENCES[this.form.frequenceRegulatory] || FREQUENCES.NONE;
    },
    frequenceInternalEnCours() {
      return FREQUENCES[this.form.frequenceInternal] || FREQUENCES.NONE;
    }
  },
  watch: {
    frequenceRegulatoryEnCours(frequence) {
      this.computeDateEvaluation(frequence, this.frequenceInternalEnCours);
    },
    frequenceInternalEnCours(frequence) {
      this.computeDateEvaluation(frequence, this.frequenceRegulatoryEnCours);
    },
    'form.dateEvaluation'(dateEvaluation) {
      this.computeDateEvaluation(this.frequenceRegulatoryEnCours, this.frequenceInternalEnCours);
    }
  },
  methods: {
    computeDateEvaluation(frequenceThat, frequenceThis) {
      debugger
      this.form.dateProchaineEvaluation = new Date(Math.min(
        frequenceThat.apply(this.form.dateEvaluation),
        frequenceThis.apply(this.form.dateEvaluation)));
    },
    submitPrevent() {
      // todo
    }
  }
}

</script>