import { API_SERVER } from 'src/envs';
import { Marriage } from "src/models";
import request from '../request';

export function getMarriageByPhoneApi(params: getMarriageByPhoneApi.Params): Promise<getMarriageByPhoneApi.Result> {
  return request({
    url: `${API_SERVER}/marriage/get/by/phone`,
    method: 'post',
    data: params
  })
}

export declare namespace getMarriageByPhoneApi {
  type Params = {
    phone: string;
    name: string;
  };

  type Result = Marriage;
}