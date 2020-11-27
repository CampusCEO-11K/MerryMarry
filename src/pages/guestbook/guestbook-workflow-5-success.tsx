import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import { getNameFromMarriage } from 'src/utils';
import { data, ticket } from 'src/utils/routes';
import MainLayout from '../layouts/main-layout';
import './guestbook-workflow-5-success.scss';

export default function GuestbookSuccessPage() {
  const marriage = useSelector((state: RootState) => state.guestbookWorkflow.marriage);
  const isOnline = useSelector((state: RootState) => state.guestbookWorkflow.isOnline);

  const name = (marriage) ? getNameFromMarriage(marriage) : undefined;

  return (
    <MainLayout title="송금 완료">
      <div className="guestbook-workflow-5-success">
        <p className="title">{name}에게 축하와 함께 축의금이 전달되었습니다!</p>
        <Link role="button" className="btn" to="/" >카카오톡으로 예비부부에게 공유하기</Link>
        {isOnline || <Link role="button" className="btn" to={ticket}>식권 받으러 가기</Link>}
        <Link role="button" className="btn" to={data}>내 결혼식 데이터 정리하러 가기</Link>
        <Link role="button" className="btn" to="/">홈으로</Link>
        <p className="subtitle">"21도는 스마트한 결혼식 문화를 만들어 갑니다."</p>
      </div>
    </MainLayout>
  )
}
