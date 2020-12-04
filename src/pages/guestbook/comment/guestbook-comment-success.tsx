import React, { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { TabBarTab } from 'src/components/tab-bar';
import { congrate } from 'src/svgs';
import { guestbook_comment } from 'src/utils/routes';
import MainLayout from '../../layouts/main-layout';
import './guestbook-comment-success.scss';

export default function GuestbookCommentSuccessPage() {
  const history = useHistory();

  const onBack = useCallback(() => {
    history.push(guestbook_comment);
  }, [history]);

  return (
    <MainLayout title="방명록 남기기" onBack={onBack} currentTab={TabBarTab.guestbook}>
      <div id="guestbook-comment-success">
        <div className="layout-1">
          <img className="icon" src={congrate} />
          <div className="title">결혼 축하 메시지를 남겼어요!</div>
        </div>
        <button className="btn" onClick={onBack}>완료</button>
      </div>
    </MainLayout>
  )
}
