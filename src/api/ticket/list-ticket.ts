import { API_SERVER } from 'src/envs';
import { Ticket } from 'src/models';
import request from '../request';

export function listTicketApi(): Promise<listTicketApi.Result> {
  return request({
    url: `${API_SERVER}/ticket`,
    method: 'get',
  });
}

export declare namespace listTicketApi {
  type Params = {
    userId: number;
  };

  type Result = Ticket[];
}
