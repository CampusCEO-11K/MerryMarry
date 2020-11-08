import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_SERVER } from 'src/envs';

export function paymentApprove(params: paymentApprove.Params): Promise<paymentApprove.Result> {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      url: `${API_SERVER}/payment/approve`,
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

export declare namespace paymentApprove {
  export type Params = {
    pg_token: string;
    tid: string;
  }
  
  export type Result = any;
}
