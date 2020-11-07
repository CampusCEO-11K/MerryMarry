import { Button, PageHeader } from 'antd';
import queryString from 'query-string';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { guestbook_write } from 'src/utils/routes';

export default function GuestbookEntryPage() {
  const history = useHistory();
  const location = useLocation();

  const qrcode = (queryString.parse(location.search)['qrcode'] || '').toString();
  const nextLink = guestbook_write(qrcode);

  return (
    <>
      <PageHeader title="방명록" onBack={history.goBack} />
      ㅇㅇㅇ님의 결혼식에 참석하셨네요! 방명록을 남기고 축의금을 간편하게 전달해보세요!
      <br />
      <p>qrcode: {qrcode}</p>
      <Button type="primary">
        <Link to={nextLink}>다음</Link>
      </Button>
    </>
  )
}
