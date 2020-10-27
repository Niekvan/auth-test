import { Mutation, State, User } from './types';
export default {
  [Mutation.LOGIN](state: State, payload: User): void {
    state.authenticated = true;
    state.user = payload;
  },
  [Mutation.LOGOUT](state: State): void {
    state.authenticated = false;
    state.user = null;
  },
};
