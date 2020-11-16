import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { guestbook_phone, guestbook_qrcode } from 'src/utils/routes';
import TabBarLayout from '../layouts/tab-bar-layout';

export default function GuestbookTabPage() {
  return (
    <TabBarLayout>
      <Space direction="vertical" style={{ margin: '8px' }}>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">QR 방명록</h5>
            <p className="card-text">결혼식에 참석하셨다면 QR코드로 방명록을 쓰고 축의금을 간편하게 전달해보세요!</p>
            <Link className="btn btn-primary" role="button" to={guestbook_qrcode}>QR 방명록</Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">온라인 방명록</h5>
            <p className="card-text">결혼식에 참석하지 못하셨다면 축하메시지와 함께 간편하게 축의금을 전달해보세요!</p>
            <Link className="btn btn-primary" role="button" to={guestbook_phone}>온라인 방명록</Link>
          </div>
        </div>

        <Link className="btn btn-primary disabled" role="button" to="/">축하 메시지</Link>
        
        <Link className="btn btn-primary" role="button" to="/payment/test">카카오페이 테스트</Link>
        <Link className="btn btn-primary" role="button" to="/qrcode-display">QRCode 생성</Link>
      </Space>
    </TabBarLayout>
  )
}
