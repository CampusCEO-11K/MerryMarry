import React from 'react';
import { Link } from 'react-router-dom';
import { TabBarTab } from 'src/components/tab-bar';
import { guestbook_comment, guestbook_phone, guestbook_qrcode } from 'src/utils/routes';
import MainLayout from '../layouts/main-layout';
import { qrcode, sendMessage, congratMessage } from 'src/svgs';
import './guestbook-tab.scss';

export default function GuestbookTabPage() {
  return (
    <MainLayout title="방명록" currentTab={TabBarTab.guestbook}>
      <div className="guestbook-tab">
        <div className="layout-1">
          <Link className="button-1" to={guestbook_qrcode}>
            <div className="icon-1">
              <img src={qrcode}/>
            </div>
            <div className="title-1">오프라인 참석</div>
          </Link>
          <Link className="button-1" to={guestbook_phone}>
            <div className="icon-1">
              <img src={sendMessage}/>
            </div>
            <div className="title-1">온라인 참석</div>
          </Link>
        </div>
        <div className="layout-2">
          <Link className="button-2" to={guestbook_comment}>
            <div className="icon-2">
              <img src={congratMessage}/>
            </div>
            <div className="title-2">축하메시지</div>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
