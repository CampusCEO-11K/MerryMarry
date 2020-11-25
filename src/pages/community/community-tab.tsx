import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import TabBarLayout from '../layouts/tab-bar-layout';

export default function CommunityPage() {
  return (
    <TabBarLayout>
      <Space direction="vertical" style={{ margin: '8px' }}>
        <Link className="btn btn-primary" role="button" to="/payment/test">카카오페이 테스트</Link>
        <Link className="btn btn-primary" role="button" to="/toss/test">토스페이먼츠 테스트</Link>
        <Link className="btn btn-primary" role="button" to="/qrcode-display">QRCode 생성</Link>
      </Space>
    </TabBarLayout>
  )
}
