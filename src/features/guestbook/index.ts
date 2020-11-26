import workflow from './workflow';
import findGuestbookOrCreate from './find-guestbook-or-create';

export default [
  ...workflow,
  ...findGuestbookOrCreate,
]
