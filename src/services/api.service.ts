import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthService } from './auth.service';
import { ModulePath } from './types';

export class ApiService extends AuthService {
  private createURL(config: ModulePath) {
    return `${config.module}/${config.path}`;
  }

  public get(config: ModulePath): Promise<AxiosResponse> {
    const requestData: AxiosRequestConfig = {
      url: this.createURL(config),
      method: 'get'
    };
    return this.request(requestData);
  }

  public post(config: ModulePath, data: any): Promise<AxiosResponse> {
    const requestData: AxiosRequestConfig = {
      url: this.createURL(config),
      method: 'post',
      data
    };
    return this.request(requestData);
  }

  public put(config: ModulePath, data: any): Promise<AxiosResponse> {
    const requestData: AxiosRequestConfig = {
      url: this.createURL(config),
      method: 'put',
      data
    };
    return this.request(requestData);
  }

  public delete(config: ModulePath): Promise<AxiosResponse> {
    const requestData: AxiosRequestConfig = {
      url: this.createURL(config),
      method: 'delete'
    };
    return this.request(requestData);
  }

  public customRequest(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.request(config);
  }
}

export default new ApiService();
