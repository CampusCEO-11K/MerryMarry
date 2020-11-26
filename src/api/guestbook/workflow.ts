import { API_SERVER } from 'src/envs';
import { GuestbookForUser } from 'src/models';
import request from '../request';

export function workflowGuestbookApi(params: workflowGuestbookApi.Params): Promise<workflowGuestbookApi.Result> {
  return request({
    url: `${API_SERVER}/guestbook/workflow`,
    method: 'post',
    data: params,
  });
}

export declare namespace workflowGuestbookApi {
  export interface TossPayload {
    paymentKey: string;
    orderId: string;
    amount: number;
  }

  export interface Params {
    userId: number;
    marriageId: number;
    isOnline: boolean;
    name: string;
    belong: string;
    msg: string;

    toss?: TossPayload;
  }

  type Result = GuestbookForUser;
}
