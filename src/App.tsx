import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppPage, HomePage, QrcodeDisplayPage, QrcodeReaderPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" component={AppPage} />
        <Route path="/qrcode-display" component={QrcodeDisplayPage} />
        <Route path="/qrcode-reader" component={QrcodeReaderPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
