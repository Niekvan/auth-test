import { Token } from './types';

export default class TokenService {
  TOKEN_KEY = 'token';
  REFRESH_TOKEN_KEY = 'refresh_token';

  public getToken() {
    const jsonToken = localStorage.getItem(this.TOKEN_KEY);
    try {
      if (jsonToken) {
        const token = JSON.parse(jsonToken);
        return token;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  public setToken(token: Token) {
    const stringified = JSON.stringify(token);
    localStorage.setItem(this.TOKEN_KEY, stringified);
  }

  public removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
