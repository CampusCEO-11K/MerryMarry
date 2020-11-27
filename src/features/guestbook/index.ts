import workflow from './workflow';
import findGuestbookOrCreate from './find-guestbook-or-create';
import listGuestbook from './list-guestbook';

export default [
  ...workflow,
  ...findGuestbookOrCreate,
  ...listGuestbook,
]
