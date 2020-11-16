import { API_SERVER } from 'src/envs';
import request from '../request';

export async function authLoginApi(params: authLoginApi.Params): Promise<authLoginApi.Result> {
  return request({
    url: `${API_SERVER}/auth/login`,
    method: 'post',
    data: params,
  });
}

export declare namespace authLoginApi {
  type Params = {
    username: string;
    password: string;
  };
  
  type Result = {
    userId: number;
  };
}