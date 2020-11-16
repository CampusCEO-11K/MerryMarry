import { PageHeader, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Marriage, Person } from 'src/models';
import { ticket } from 'src/utils/routes';

interface Props {
  marriage?: Marriage;
  person?: Person;
}

export default function GuestbookSuccessPage({ marriage, person }: Props) {
  let msg = <div />;
  if (marriage) {
    msg = <p>{marriage.male.name}❤️ {marriage.lady.name}에게 축하와 함께 축의금이 전달되었습니다!</p>
  } else if (person) {
    msg = <p>{person}에게 축하와 함께 축의금이 전달되었습니다!</p>
  };


  return (
    <>
      <PageHeader title="송금 완료" />
      <Space direction="vertical" style={{ margin: '8px' }}>
        {msg}
        <button type="button" className="btn btn-light" disabled><Link to="/">카카오톡으로 예비부부에게 공유하기</Link></button>
        <button type="button" className="btn btn-light"><Link to={ticket}>식권 받으러 가기</Link></button>
        <button type="button" className="btn btn-light"><Link to="/">홈으로</Link></button>
      </Space>
    </>
  )
}
