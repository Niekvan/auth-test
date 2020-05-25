import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import TokenStorage from './storage.service';
import { Token, ApiConfig } from './types';

export class AuthService {
  public isLoggedIn = false;
  public initialized: Promise<void>;
  public _tokenStorage!: TokenStorage;
  private _api!: AxiosInstance;
  private _token: Token | null = null;
  private _interceptorID!: number | null;
  private _onLogout!: Function;
  private _resolveInitialized: (() => void) | undefined;

  constructor() {
    this.initialized = new Promise(
      resolve => (this._resolveInitialized = resolve)
    );
  }

  public init(config: ApiConfig) {
    this._api = axios.create(config.instance);
    this._onLogout = config.onLogout;
    this._tokenStorage = new TokenStorage();

    const token = this._tokenStorage.getToken();

    if (token) {
      this._setToken(token);
    }

    if (this._resolveInitialized) {
      this._resolveInitialized();
      this._resolveInitialized = undefined;
    }
  }

  public async login(email: string, password: string) {
    try {
      const { data: token }: AxiosResponse = await this.request({
        url: '/login',
        method: 'post',
        data: {
          email,
          password
        }
      });

      this._setToken(token);
      const user = this._extractUserFromToken(token.accessToken);
      return user;
    } catch (e) {
      console.error(e);
      this._removeAllTokens();
      this.isLoggedIn = false;
    }
  }

  public async logout() {
    this.isLoggedIn = false;
    this._removeAllTokens();
  }

  public async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._api(config);
  }

  private async _refreshAccessToken() {
    if (!this._token) {
      throw new Error('No refresh token available');
    }

    const requestData: AxiosRequestConfig = {
      url: '/o/token',
      method: 'post',
      data: {
        refreshToken: this._token.refreshToken
      }
    };

    try {
      return this.request(requestData);
    } catch (e) {
      console.error(e);
    }
  }

  private _setToken(token: Token) {
    this._token = token;
    this._tokenStorage.setToken(token);
    this._setAthourizationHeader(token.accessToken);
    this._mount401Interceptor();
    this.isLoggedIn = true;
  }

  private _setAthourizationHeader(token: string) {
    this._api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  private _removeAuthorizationHeader() {
    delete this._api.defaults.headers.common.Authorization;
  }

  private _intercept401 = async (error: any) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    if (error.config.url.includes('/o/token')) {
      this._onLogout();
      return error;
    } else {
      try {
        const response = await this._refreshAccessToken();
        const token = response?.data;
        this._setToken(token);
        return await this.request({
          method: error.config.method,
          url: error.config.url,
          data: error.config.data
        });
      } catch (e) {
        console.error(e);
        return Promise.reject(new Error('Could not update accesstoken'));
      }
    }
  };

  private _mount401Interceptor() {
    this._interceptorID = this._api.interceptors.response.use(
      response => response,
      this._intercept401
    );
  }

  private _unmount401Interceptor() {
    if (this._interceptorID) {
      this._api.interceptors.response.eject(this._interceptorID);
    }
  }

  private _removeAllTokens() {
    this.isLoggedIn = false;
    this._removeAuthorizationHeader();
    this._unmount401Interceptor();
    this._tokenStorage.removeToken();
    this._token = null;
  }

  private _extractUserFromToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
}
