import { Token } from './types';

export default class TokenService {
  TOKEN_KEY = 'token';
  REFRESH_TOKEN_KEY = 'refresh_token';

  public getToken() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token ? JSON.parse(token) : null;
  }

  public setToken(token: Token) {
    const stringified = JSON.stringify(token);
    localStorage.setItem(this.TOKEN_KEY, stringified);
  }

  public removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
