import { API_SERVER } from 'src/envs';
import { GuestbookForUser } from 'src/models';
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
    userId: number;
    transactionId?: number;
    name: string;
    belong?: string;
    msg?: string;
    isOnline: boolean;
  };

  type Result = GuestbookForUser;
}
