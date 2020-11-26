import { API_SERVER } from 'src/envs';
import { Transaction } from 'src/models';
import request from '../request';

export function kakaoApproveApi(params: kakaoApproveApi.Params): Promise<kakaoApproveApi.Result> {
  return request({
    url: `${API_SERVER}/payment/kakao/approve`,
    method: 'post',
    data: params,
  });
}

export declare namespace kakaoApproveApi {
  export type Params = {
    pgToken: string;
    tid: string;
  }
  
  export type Result = Transaction;
}
