import Vue from 'vue';
import Vuex from 'vuex';

import { actions } from './actions';
import { state } from './state';
import { mutations } from './mutations';

import auth from '@/modules/user/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    auth
  }
});
