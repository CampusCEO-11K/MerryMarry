import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_SERVER } from 'src/envs';

export function paymentReady(params: paymentReady.Params): Promise<paymentReady.Result> {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      url: `${API_SERVER}/payment/ready`,
      method: 'post',
      data: params,
    }

    axios(config)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((err: string) => {
        reject(err);
      })
  })
}

export declare namespace paymentReady {
  export type Params = {
    amount: number;
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
