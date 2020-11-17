import { API_SERVER } from 'src/envs';
import request from '../request';

export function paymentReady(params: paymentReady.Params): Promise<paymentReady.Result> {
  return request({
    url: `${API_SERVER}/payment/ready`,
    method: 'post',
    data: params,
  })
}

export declare namespace paymentReady {
  export type Params = {
    amount: number;
    itemName: string;
  }

  export type Result = {
    tid: string;
    next_redirect_app_url: string;
    next_redirect_mobile_url: string;
    next_redirect_pc_url: string;
    android_app_scheme: string;
    ios_app_scheme: string;
    created_at: string;
  }
}
