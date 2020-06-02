import axios from 'axios';
import { ActionTree } from 'vuex';

import ApiService from '@/services/api.service';
import userService from '@/services/user.service';
import { ApiConfig } from '@/services/types';

import router from '@/router';

import { State } from './types';
import { SET_LOADING } from './mutation_types';

export const actions: ActionTree<State, any> = {
  async init({ commit }) {
    const { data: apiConfig } = await axios.get('/settings.json');

    const config: ApiConfig = {
      instance: apiConfig,
      onLogout: () => {
        router.push({ name: 'Login' });
      }
    };

    ApiService.init(config);

    const { data: services } = await axios.get('/services.json');

    userService.init(services.userService);

    await ApiService.initialized;

    const isPublic = router.currentRoute.meta.public;

    if (userService.isLoggedIn) {
      try {
        await userService.me();
      } catch (e) {
        console.log(e);
      }
    }

    if (!isPublic && !userService.isLoggedIn) {
      router.push({
        name: 'Login',
        query: { redirect: router.currentRoute.fullPath }
      });
    }

    commit(SET_LOADING, false);
  }
};
