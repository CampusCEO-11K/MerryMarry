import { Button, PageHeader, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <PageHeader
        title="MerryMarry"
      />
      <Space direction="vertical" style={{ marginTop: '8px' }}>
        <Button block>
          <Link to="/qrcode-display">/qrcode-display</Link>
        </Button>
      </Space>
    </div>
  )
}
