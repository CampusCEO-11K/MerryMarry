import { API_SERVER } from 'src/envs';
import { User } from 'src/models';
import request from '../request';

export function authUpdateApi(params: authUpdateApi.Params): Promise<authUpdateApi.Result> {
  return request({
    url: `${API_SERVER}/auth/update`,
    method: 'post',
    data: params,
  })
}

export declare namespace authUpdateApi {
  type Params = {
    userId: number;
    phone?: number;
    name?: string;
  };
  
  type Result = User;
}