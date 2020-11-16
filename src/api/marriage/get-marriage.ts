import { API_SERVER } from 'src/envs';
import { Marriage } from 'src/models';
import request from '../request';

export function getMarriageApi(params: getMarriageApi.Params): Promise<getMarriageApi.Result> {
  return request({
    url: `${API_SERVER}/marriage/${params.marriageId}`,
    method: 'get',
  });
}

export declare namespace getMarriageApi {
  type Params = {
    marriageId: number;
  };

  type Result = Marriage;
}
