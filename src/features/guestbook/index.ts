import workflow from './workflow';
import findGuestbookOrCreate from './find-guestbook-or-create';
import listGuestbook from './list-guestbook';

const sagas = [
  ...workflow,
  ...findGuestbookOrCreate,
  ...listGuestbook,
]

export default sagas;
