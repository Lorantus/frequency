import Vue from 'vue'
import App from './App.vue'
import { RESPONSABLES } from './utils/Responsables';
import store from './store/store'

Vue.config.productionTip = false;

// ajax call mock
const ajaxCallGet = (url, params, options) => new Promise(resolve => resolve(RESPONSABLES));

// vuex store adapter for .js access
const createNamespacedStore = namespace => 
  (mutation, [...args]) => store.commit(`${namespace}/${mutation}`, args);

const mutationsFiche = createNamespacedStore('fiche');

ajaxCallGet('url', {}, {})
  .then(responsables => mutationsFiche('UPDATE_RESPONSABLES', responsables));

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
