export const mealTicket = "/meal-ticket";
export const dataManage = "/data-manage";
export const community = "/community";
export const my = "/my";

export const guestbook = "/guestbook";
export const guestbook_qrcode = `${guestbook}/qrcode`;
export const guestbook_entry = (qrcode: string) => `${guestbook}/entry?qrcode=${encodeURI(qrcode)}`;
export const guestbook_write = (qrcode: string) => `${guestbook}/write?qrcode=${encodeURI(qrcode)}`;
export const guestbook_payment = (qrcode: string) => `${guestbook}/payment?qrcode=${encodeURI(qrcode)}`;
export const guestbook_success = `${guestbook}/success`;
