import { API_SERVER } from 'src/envs';
import { GuestbookForUser } from 'src/models';
import request from '../request';

export function listGuestbookApi(params: listGuestbookApi.Params): Promise<listGuestbookApi.Result> {
  return request({
    url: `${API_SERVER}/guestbook?userId=${params.userId}`,
    method: 'get',
  });
}

export declare namespace listGuestbookApi {
  export type Params = {
    userId: number;
  }
  
  export type Result = GuestbookForUser[];
}
