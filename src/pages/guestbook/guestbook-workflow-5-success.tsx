import { PageHeader, Space } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import { getNameFromMarriage } from 'src/utils';
import { ticket } from 'src/utils/routes';

export default function GuestbookSuccessPage() {
  const marriage = useSelector((state: RootState) => state.guestbookWorkflow.marriage);

  const name = (marriage) ? getNameFromMarriage(marriage) : undefined;

  return (
    <>
      <PageHeader title="송금 완료" />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>{name}에게 축하와 함께 축의금이 전달되었습니다!</p>
        <Link role="button" className="btn btn-primary disabled" to="/" >카카오톡으로 예비부부에게 공유하기</Link>
        <Link role="button" className="btn btn-primary" to={ticket}>식권 받으러 가기</Link>
        <Link role="button" className="btn btn-primary" to="/">홈으로</Link>
      </Space>
    </>
  )
}
