import { API_SERVER } from 'src/envs';
import { Marriage } from "src/models";
import request from '../request';

export function findMarriageOrcreateApi(params: findMarriageOrcreateApi.Params): Promise<findMarriageOrcreateApi.Result> {
  return request({
    url: `${API_SERVER}/marriage/find-or-create`,
    method: 'post',
    data: params
  })
}

export declare namespace findMarriageOrcreateApi {
  type Params = {
    phone: string;
    name: string;
    isMale: boolean;
  };

  type Result = Marriage;
}