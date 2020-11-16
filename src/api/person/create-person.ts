import { API_SERVER } from 'src/envs';
import { Person } from 'src/models';
import request from '../request';

export function createPersonApi(params: createPersonApi.Params): Promise<createPersonApi.Result> {
  return request({
    url: `${API_SERVER}/person`,
    method: 'post',
    data: params,
  });
}

export declare namespace createPersonApi {
  type Params = {
    name: string;
    phone: string;
  };

  type Result = Person;
}
