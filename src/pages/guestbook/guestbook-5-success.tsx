import { Button, PageHeader, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GuestbookSuccessPage() {
  return (
    <>
      <PageHeader title="송금 완료" />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>ㅇㅇㅇ님에게 축하와 함께 축의금이 전달되었습니다!</p>
        <Button disabled><Link to="/">카카오톡으로 예비부부에게 공유하기</Link></Button>
        <Button disabled><Link to="/">식권 받으러 가기</Link></Button>
        <Button><Link to="/">홈으로</Link></Button>
      </Space>
    </>
  )
}
