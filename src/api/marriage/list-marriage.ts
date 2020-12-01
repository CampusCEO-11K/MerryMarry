import { API_SERVER } from 'src/envs';
import { Marriage } from 'src/models';
import request from '../request';

export function listMarriageApi(params: listMarriageApi.Params): Promise<listMarriageApi.Result> {
  return request({
    url: `${API_SERVER}/marriage`,
    method: 'get',
  });
}

export declare namespace listMarriageApi {
  type Params = {
  };

  type Result = Marriage[];
}
