import { SET_LOADING } from './mutation_types';
import { State } from './types';

export const mutations = {
  [SET_LOADING](state: State, payload: boolean) {
    state.isLoading = payload;
  }
};
