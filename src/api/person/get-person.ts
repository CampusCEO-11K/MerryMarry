import { API_SERVER } from 'src/envs';
import { Person } from 'src/models';
import request from '../request';

export function getPersonApi(params: getPersonApi.Params): Promise<getPersonApi.Result> {
  return request({
    url: `${API_SERVER}/person/${params.personId}`,
    method: 'get',
  });
}

export declare namespace getPersonApi {
  type Params = {
    personId: number;
  };

  type Result = Person;
}
