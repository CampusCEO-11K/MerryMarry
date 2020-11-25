import { API_SERVER } from 'src/envs';
import { Ticket } from 'src/models';
import request from '../request';

export function listTicketApi(params: listTicketApi.Params): Promise<listTicketApi.Result> {
  return request({
    url: `${API_SERVER}/ticket?userId=${params.userId}`,
    method: 'get',
  });
}

export declare namespace listTicketApi {
  export type Params = {
    userId: number;
  }
  
  export type Result = Ticket[];
}
