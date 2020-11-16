import { API_SERVER } from 'src/envs';
import { Person } from "src/models";
import request from '../request';

export function findPersonByPhoneApi(params: findPersonByPhoneApi.Params): Promise<findPersonByPhoneApi.Result> {
  return request({
    url: `${API_SERVER}/person/find/by/phone`,
    method: 'post',
    data: params
  })
}

export declare namespace findPersonByPhoneApi {
  type Params = {
    phone: string;
  };

  type Result = Person;
}