import ApiService from './api.service';
import { UserConfig } from './types';

class UserService {
  public initialized = false;
  private _config!: UserConfig;

  public get isLoggedIn(): boolean {
    return ApiService.isLoggedIn;
  }

  public init(config: UserConfig) {
    this._config = config;
    this.initialized = true;
  }

  public async me() {
    try {
      const { data: user } = await ApiService.get({
        module: this._config.shortName,
        path: 'me'
      });

      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export default new UserService();
