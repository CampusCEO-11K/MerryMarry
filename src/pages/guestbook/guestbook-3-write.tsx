import { Button, Input, PageHeader, Space } from 'antd';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { guestbook_payment } from 'src/utils/routes';

const { TextArea } = Input;

export default function GuestbookWritePage() {
  const history = useHistory();
  const location = useLocation();

  const qrcode = (queryString.parse(location.search)['qrcode'] || '').toString();
  const nextLink = guestbook_payment(qrcode);

  return (
    <>
      <PageHeader title="방명록 남기기" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>방명록 작성</p>
        <TextArea
          placeholder="여기에 방명록을 작성하세요"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <Button type="primary" disabled><Link to={nextLink}>음성으로 남기기</Link></Button>
        <Button type="primary" disabled><Link to={nextLink}>영상으로 남기기</Link></Button>
        <Button type="primary"><Link to={nextLink}>건너뛰기</Link></Button>
        <Button type="primary"><Link to={nextLink}>다음</Link></Button>
      </Space>
    </>
  )
}
