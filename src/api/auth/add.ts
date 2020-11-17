import { API_SERVER } from 'src/envs';
import { User } from 'src/models';
import request from '../request';

export function authAddApi(params: authAddApi.Params): Promise<authAddApi.Result> {
  return request({
    url: `${API_SERVER}/auth/add`,
    method: 'post',
    data: params,
  })
}

export declare namespace authAddApi {
  type Params = {
    phone?: number;
    name?: string;
  };
  
  type Result = User;
}