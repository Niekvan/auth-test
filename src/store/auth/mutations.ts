import { Mutation, State, User } from './types';
export default {
  [Mutation.LOGIN](state: State, payload: User) {
    state.authenticated = true;
    state.user = payload;
  },
  [Mutation.LOGOUT](state: State) {
    state.authenticated = false;
    state.user = null;
  }
};
