import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as routes from 'src/utils/routes';
import * as pages from './pages';

function App() {
  return (
    <Switch>
      <Route path="/qrcode-display" component={pages.QrcodeDisplayPage} />

      <Route path="/payment/test/success" component={pages.PaymentTestSuccessPage} />
      <Route path="/payment/test" component={pages.PaymentTestPage} />

      <Route path={routes.guestbook_qrcode} component={pages.GuestbookQrcodePage} />
      <Route path={routes.guestbook_entry('').split('?')[0]} component={pages.GuestbookEntryPage} />
      <Route path={routes.guestbook_write('').split('?')[0]} component={pages.GuestbookWritePage} />
      <Route path={routes.guestbook_payment('').split('?')[0]} component={pages.GuestbookPaymentPage} />
      <Route path={routes.guestbook_success} component={pages.GuestbookSuccessPage} />
      <Route path={routes.guestbook} component={pages.GuestbookTabPage} />

      <Route path={routes.mealTicket} component={pages.MealTicketPage} />
      <Route path={routes.dataManage} component={pages.DataManagePage} />
      <Route path={routes.community} component={pages.CommunityPage} />
      <Route path={routes.my} component={pages.MyPage} />
      <Route path="/"><Redirect to={routes.guestbook} /></Route>
    </Switch>
  );
}

export default App;
