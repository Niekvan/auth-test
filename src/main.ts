import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './modules/main/store';

import './components';

store.dispatch('init');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
