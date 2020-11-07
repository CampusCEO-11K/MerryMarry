import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import * as pages from './pages';
import * as routes from 'src/utils/routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/qrcode-display" component={pages.QrcodeDisplayPage} />

        <Route path="/payment/test" component={pages.PaymentTestPage} />
        <Route path="/payment/success" component={pages.PaymentSuccessPage} />
        <Route path="/payment/fail" component={pages.PaymentFailPage} />
        <Route path="/payment/cancel" component={pages.PaymentCancelPage} />

        <Route path={routes.guestbook_qrcode} component={pages.GuestbookQrcodePage} />
        <Route path={routes.guestbook_entry('').split('?')[0]} component={pages.GuestbookEntryPage} />
        <Route path={routes.guestbook_write('').split('?')[0]} component={pages.GuestbookWritePage} />
        <Route path={routes.guestbook_payment('').split('?')[0]} component={pages.GuestbookPaymentPage} />
        <Route path={routes.guestbook} component={pages.GuestbookTabPage} />

        <Route path={routes.mealTicket} component={pages.MealTicketPage} />
        <Route path={routes.dataManage} component={pages.DataManagePage} />
        <Route path={routes.community} component={pages.CommunityPage} />
        <Route path={routes.my} component={pages.MyPage} />
        <Route path="/"><Redirect to={routes.guestbook} /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
