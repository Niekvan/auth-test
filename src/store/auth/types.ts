export const Actions = {
  LOGIN: '😇 LOGIN',
  LOGOUT: '🙍 LOGOUT'
};

export const Mutation = {
  LOGIN: '😇 LOGIN',
  LOGOUT: '🙍 LOGOUT'
};

export const Getters = {
  isAuthenticated: 'isAuthenticated'
};

export interface User {
  name: string;
  email: string;
  config: JSON;
}

export interface State {
  user: User | null;
  authenticated: boolean;
}
