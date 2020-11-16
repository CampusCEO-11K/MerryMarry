import { Button, PageHeader, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentTestSuccessPage() {
  return (
    <>
      <PageHeader title="카카오페이 테스트 성공" />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>카카오페이 테스트 성공</p>
        <Button><Link to="/">홈으로</Link></Button>
      </Space>
    </>
  )
}
