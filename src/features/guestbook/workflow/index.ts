import init from './1-init';
import entry from './2-entry';
import guestbook from './3-guestbook';
import payment from './4-payment';
import login from './5-login';
import process from './6-process';

export default [
  ...init,
  ...entry,
  ...guestbook,
  ...payment,
  ...login,
  ...process,
]