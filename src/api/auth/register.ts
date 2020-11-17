import { API_SERVER } from 'src/envs';
import { User } from 'src/models';
import request from '../request';

export function authRegisterApi(params: authRegisterApi.Params): Promise<authRegisterApi.Result> {
  return request({
    url: `${API_SERVER}/auth/login`,
    method: 'post',
    data: params,
  })
}

export declare namespace authRegisterApi {
  type Params = {
    userId: number;
    username: string;
    password: string;
    phone: string;
    name: string;
  };
  
  type Result = User;
}