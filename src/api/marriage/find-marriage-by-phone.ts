import { API_SERVER } from 'src/envs';
import { Marriage } from "src/models";
import request from '../request';

export function findMarriageByPhoneApi(params: findMarriageByPhoneApi.Params): Promise<findMarriageByPhoneApi.Result> {
  return request({
    url: `${API_SERVER}/marriage/find/by/phone`,
    method: 'post',
    data: params
  })
}

export declare namespace findMarriageByPhoneApi {
  type Params = {
    phone: string;
  };

  type Result = Marriage;
}