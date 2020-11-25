import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as routes from 'src/utils/routes';
import { RootState } from './features';
import { authAddRequest } from './features/auth/add';
import { useWindowSize } from './hooks';
import * as pages from './pages';

function App() {
  const [width] = useWindowSize();

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      dispatch(authAddRequest({}))
    }
  }, [dispatch, user])

  const content = (
    <div id="app-container">
      <Switch>
        <Route path="/qrcode-display" component={pages.QrcodeDisplayPage} />

        <Route path="/toss/test" component={pages.TossTestPage} />
        <Route path="/toss/ready-result" component={pages.TossReadyPage} />

        <Route path={routes.guestbook_workflow()} component={pages.GuestbookWorkflowPage} />
        <Route path={routes.guestbook_phone} component={pages.GuestbookPhonePage} />
        <Route path={routes.guestbook_qrcode} component={pages.GuestbookQrcodePage} />
        <Route path={routes.guestbook} component={pages.GuestbookTabPage} />

        <Route path={routes.ticket} component={pages.TicketPage} />
        <Route path={routes.data} component={pages.DataPage} />
        <Route path={routes.community} component={pages.CommunityPage} />
        <Route path={routes.my} component={pages.MyPage} />

        <Route path="/"><Redirect to={routes.guestbook} /></Route>
      </Switch>
    </div>
  )

  if (width > 600) {
    return (
      <pages.PhoneLayout>
        {content}
      </pages.PhoneLayout>
    );
  } else {
    return content;
  }
}

export default App;
