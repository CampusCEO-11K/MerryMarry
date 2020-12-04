import workflow from './workflow';
import findGuestbookOrCreate from './find-guestbook-or-create';
import listGuestbook from './list-guestbook';
import writeGuestbook from './write-guestbook';

const sagas = [
  ...workflow,
  ...findGuestbookOrCreate,
  ...listGuestbook,
  ...writeGuestbook,
]

export default sagas;
