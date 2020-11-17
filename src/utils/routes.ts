import qs from 'query-string';

export const ticket = "/ticket";
export const data = "/data-manage";
export const community = "/community";
export const my = "/my";

// guestbook
export interface GuestbookWorkflowQuery {
  marriageId: number;
  isOnline: boolean;
}
export const guestbook_workflow = (query?: GuestbookWorkflowQuery) => {
  const querystring = query
    ? '?' + qs.stringify(query as any)
    : '';
  return `/guestbook/workflow${querystring}`
};
export const guestbook_qrcode = `/guestbook/find-by-qrcode`;
export const guestbook_phone = "/guestbook/find-by-phone";
export const guestbook = "/guestbook";
