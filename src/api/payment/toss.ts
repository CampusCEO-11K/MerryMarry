import { API_SERVER } from 'src/envs';
import { Transaction } from 'src/models';
import request from '../request';

export function tossApi(params: tossApi.Params): Promise<tossApi.Result> {
  return request({
    url: `${API_SERVER}/payment/toss`,
    method: 'post',
    data: params,
  });
}

export declare namespace tossApi {
  export type Params = {
    paymentKey: string;
    orderId: string;
    amount: number;
  }
  
  export type Result = Transaction;
}
