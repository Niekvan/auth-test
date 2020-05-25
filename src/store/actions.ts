import axios from 'axios';
import { ActionTree } from 'vuex';

import apiService from '@/services/api.service';
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
        router.push({ name: 'Home' });
      }
    };

    apiService.init(config);

    const { data: services } = await axios.get('/services.json');

    userService.init(services.userService);

    commit(SET_LOADING, false);
  }
};
