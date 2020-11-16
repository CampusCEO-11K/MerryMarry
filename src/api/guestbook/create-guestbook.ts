import { API_SERVER } from 'src/envs';
import request from '../request';

export function createGuestbookApi(params: createGuestbookApi.Params): Promise<createGuestbookApi.Result> {
  return request({
    url: `${API_SERVER}/guestbook`,
    method: 'post',
    data: params,
  });
}

export declare namespace createGuestbookApi {
  type Params = {
    marriageId: number;
    userId?: number;
    name: string;
    belong: string;
    msg: string;
  };

  type Result = {
    guestbookId: number;
    marriageId: number;
    name: string;
    belong: string;
    msg: string;
  };
}
