import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { TabBarTab } from 'src/components/tab-bar';
import { card, cs, invite, noti, point, profile, review, setting } from 'src/svgs';
import { my_point } from 'src/utils/routes';
import MainLayout from '../layouts/main-layout';
import './my-tab.scss';

export default function MyPage() {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(my_point);
  }, [history])

  const alertReady = useCallback(() => {
    alert('준비중입니다.');
  }, []);

  return (
    <MainLayout title="MY" currentTab={TabBarTab.my}>
      <div id="my-tab">
        <div id="info-card">
          <img id="setting-btn" src={setting} onClick={alertReady} />
          <span id="logout-btn" onClick={alertReady}>로그아웃</span>
          <img id="profile-btn" src={profile} onClick={alertReady}/>
          <span id="name">이몽룡씨 안녕하세요</span>
        </div>
        <table>
          <tr>
            <td onClick={onClick}>
              <img src={point} style={{ width: '48px', height: '54px' }}/>
              <span>포인트</span>
            </td>
            <td onClick={alertReady}>
              <img src={card} style={{ width: '56px', height: '56px' }}/>
              <span>결제 및 계좌정보</span>
            </td>
            <td onClick={alertReady}>
              <img src={noti} style={{ width: '56px', height: '56px' }}/>
              <span>알림</span>
            </td>
          </tr>
          <tr>
            <td onClick={alertReady}>
              <img src={cs} style={{ width: '56px', height: '56px' }}/>
              <span>고객센터</span>
            </td>
            <td onClick={alertReady}>
              <img src={invite} style={{ width: '58px', height: '58px' }}/>
              <span>친구 초대하기</span>
            </td>
            <td onClick={alertReady}>
              <img src={review} style={{ width: '56px', height: '56px' }}/>
              <span>작성후기</span>
            </td>
          </tr>
        </table>
        <div id="convert-btn" onClick={alertReady}>예비부부로 전환</div>
      </div>
    </MainLayout>
  )
}
