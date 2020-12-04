import React from 'react';
import { TabBarTab } from 'src/components/tab-bar';
import { clear, setting, profile, point, card, noti, cs, invite, review } from 'src/svgs';
import MainLayout from '../layouts/main-layout';
import './my-tab.scss';

export default function MyPage() {
  return (
    <MainLayout title="MY" currentTab={TabBarTab.my}>
      <div id="my-tab">
        <div id="info-card">
          <img id="clear-btn" src={clear} />
          <img id="setting-btn" src={setting} />
          <span id="logout-btn">로그아웃</span>
          <img id="profile-btn" src={profile} />
          <span id="name">이몽룡씨 안녕하세요</span>
        </div>
        <table>
          <tr>
            <td>
              <img src={point} style={{ width: '48px', height: '54px' }}/>
              <span>포인트</span>
            </td>
            <td>
              <img src={card} style={{ width: '56px', height: '56px' }}/>
              <span>결제 및 계좌정보</span>
            </td>
            <td>
              <img src={noti} style={{ width: '56px', height: '56px' }}/>
              <span>알림</span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={cs} style={{ width: '56px', height: '56px' }}/>
              <span>고객센터</span>
            </td>
            <td>
              <img src={invite} style={{ width: '58px', height: '58px' }}/>
              <span>친구 초대하기</span>
            </td>
            <td>
              <img src={review} style={{ width: '56px', height: '56px' }}/>
              <span>작성후기</span>
            </td>
          </tr>
        </table>
        <div id="convert-btn">예비부부로 전환</div>
      </div>
    </MainLayout>
  )
}
