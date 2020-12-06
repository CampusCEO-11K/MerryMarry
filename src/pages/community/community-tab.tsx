import React from 'react';
import { TabBarTab } from 'src/components/tab-bar';
import MainLayout from '../layouts/main-layout';

export default function CommunityPage() {
  return (
    <MainLayout title="커뮤니티" currentTab={TabBarTab.community} >
      <div>
        {/* <Link className="btn btn-primary" role="button" to="/payment/test">카카오페이 테스트</Link>
        <Link className="btn btn-primary" role="button" to="/toss/test">토스페이먼츠 테스트</Link>
        <Link className="btn btn-primary" role="button" to="/qrcode-display">QRCode 생성</Link> */}
      </div>
    </MainLayout>
  )
}
