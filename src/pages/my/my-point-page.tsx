import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { TabBarTab } from 'src/components/tab-bar'
import { clear, point, profile, setting } from 'src/svgs';
import MainLayout from '../layouts/main-layout';
import './my-point-page.scss';

export default function MyPointPage() {
  const history = useHistory();

  const onBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const alertReady = useCallback(() => {
    alert('준비중입니다.');
  }, []);

  return (
    <MainLayout title="마이페이지" currentTab={TabBarTab.my}>
      <div id="my-point-page">
        <div className="layout-1">
          <img className="clear-btn" src={clear} onClick={onBack}/>
          <span className="logout-btn" onClick={alertReady}>로그아웃</span>
          <img className="setting-btn" src={setting} onClick={alertReady}/>
        </div>
        <div className="layout-2">
          <img className="profile-btn" src={profile} onClick={alertReady}/>
          <span className="name">이몽룡씨 안녕하세요</span>
        </div>
        <div className="layout-3">
          <div className="layout-3-1">
            <div className="title">21도 웨딩포인트</div>
            <img src={point} />
            <div className="point-text" onClick={alertReady}>0 원 &gt;</div>
            <button className="btn" onClick={alertReady}>충전하기</button>
          </div>
          <div className="button-bar">
            <div onClick={alertReady}>결제내역</div>
            <div onClick={alertReady}>송금</div>
            <div onClick={alertReady}>선물함</div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
