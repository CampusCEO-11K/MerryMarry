import { API_SERVER } from 'src/envs';
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
    pg_token: string;
    tid: string;
  }
  
  export type Result = any;
}
