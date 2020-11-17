import { API_SERVER } from 'src/envs';
import { Transaction } from 'src/models';
import request from '../request';

export function paymentApprove(params: paymentApprove.Params): Promise<paymentApprove.Result> {
  return request({
    url: `${API_SERVER}/payment/approve`,
    method: 'post',
    data: params,
  });
}

export declare namespace paymentApprove {
  export type Params = {
    pgToken: string;
    tid: string;
  }
  
  export type Result = Transaction;
}
