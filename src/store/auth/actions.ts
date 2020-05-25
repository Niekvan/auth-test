import { ActionTree } from 'vuex';

import apiService from '@/services/api.service';
import router from '@/router';

import { Mutation } from './types';

export const actions: ActionTree<any, any> = {
  async login({ commit }, { email, password }) {
    const user = await apiService.login(email, password);
    commit(Mutation.LOGIN, user);
    const redirect = router.currentRoute.query.redirect as string;

    if (redirect) {
      router.push(redirect);
    } else {
      router.push({ name: 'Home' });
    }
  },
  async logout({ commit }) {
    await apiService.logout();
    commit(Mutation.LOGOUT);
    router.push({ name: 'Login' });
  }
};
