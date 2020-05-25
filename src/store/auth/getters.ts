import { Getters, State } from './types';

export default {
  [Getters.isAuthenticated]: (state: State) => !!state.authenticated
};
