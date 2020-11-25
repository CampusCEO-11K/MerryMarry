import React from 'react';
import { Link } from 'react-router-dom';
import { guestbook_phone, guestbook_qrcode } from 'src/utils/routes';
import TabBarLayout from '../layouts/tab-bar-layout';
import './guestbook-tab.scss';

export default function GuestbookTabPage() {
  return (
    <TabBarLayout>
      <div className="guestbook-tab">
        <div className="layout-1">
          <Link className="button-1" to={guestbook_qrcode}>
            <div className="icon-1"></div>
            <div className="title-1">오프라인 참석</div>
          </Link>
          <Link className="button-1" to={guestbook_phone}>
            <div className="icon-1"></div>
            <div className="title-1">온라인 참석</div>
          </Link>
        </div>
        <div className="layout-2">
          <Link className="button-2" to="/">
            <div className="icon-2"></div>
            <div className="title-2">축하메시지</div>
          </Link>
        </div>
      </div>
    </TabBarLayout>
  )
}
