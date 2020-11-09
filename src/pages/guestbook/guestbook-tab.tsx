import { Button, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { guestbook_qrcode } from 'src/utils/routes';
import TabBarLayout from '../layouts/tab-bar-layout';

export default function GuestbookTabPage() {
  return (
    <TabBarLayout>
      <Space direction="vertical" style={{ margin: '8px' }}>
        <Button>
          <Link to="/payment/test">카카오페이 테스트</Link>
        </Button>
        <Button>
          <Link to="/qrcode-display">QRCode 생성</Link>
        </Button>
        <Button>
          <Link to={guestbook_qrcode}>QR 방명록</Link>
        </Button>
        <p>결혼식에 참석하셨다면 QR코드로 방명록을 쓰고 축의금을 간편하게 전달해보세요!</p>
        <Button disabled>
          <Link to="/">온라인 방명록</Link>
        </Button>
        <p>결혼식에 참석하지 못하셨다면 축하메시지와 함께 간편하게 축의금을 전달해보세요!</p>
        <Button disabled>
          <Link to="/">축하 메시지</Link>
        </Button>
      </Space>
    </TabBarLayout>
  )
}
