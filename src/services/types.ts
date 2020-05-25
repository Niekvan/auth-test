export interface ModulePath {
  module: string;
  path: string;
}

export interface InstanceConfig {
  baseURL: string;
  host?: string;
  protocol?: string;
}

export interface ApiConfig {
  instance: InstanceConfig;
  onLogout: Function;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface UserConfig {
  url: string;
  name: string;
  shortName: string;
}
