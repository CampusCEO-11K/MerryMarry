import { API_SERVER } from 'src/envs';
import request from '../request';

export function guestbookWorkflowApi(params: guestbookWorkflowApi.Params): Promise<guestbookWorkflowApi.Result> {
  return request({
    url: `${API_SERVER}/guestbook/workflow`,
    method: 'post',
    data: params,
  });
}

export declare namespace guestbookWorkflowApi {
  type Params = {
    marriageId?: number;
    personId?: number;
    userId?: number;
    guestbook?: {
      name: string;
      belong: string;
      msg: string;
    };
    isOnline: boolean;
    amount?: number;
  };

  type Result = {
    transactionId?: number,
    guestbookId?: number,
    ticketId?: number,
  };
}
