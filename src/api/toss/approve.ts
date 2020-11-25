import { API_SERVER } from 'src/envs';
import { Transaction } from 'src/models';
import request from '../request';

export function tossApprove(params: tossApprove.Params): Promise<tossApprove.Result> {
  return request({
    url: `${API_SERVER}/payment/toss`,
    method: 'post',
    data: params,
  });
}

export declare namespace tossApprove {
  export type Params = {
    paymentKey: string;
    orderId: string;
    amount: number;
  }
  
  export type Result = Transaction;
}
