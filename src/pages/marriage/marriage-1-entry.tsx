import { PageHeader, Space } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MarriageCard } from 'src/components';
import { RootActions } from 'src/features';
import { Marriage, Person } from 'src/models';

interface Props {
  marriage?: Marriage;
  person?: Person;
  isOnline: boolean;
}

export default function GuestbookEntryPage({ marriage, person, isOnline }: Props) {
  const dispatch = useDispatch();
  
  let msg = <div />;
  if (marriage) {
    if (isOnline) {
      msg = <p>{marriage.male.name}❤️ {marriage.lady.name}의 결혼식에 참석하지는 못했지만, 축하하는 마음으로 방명록을 남기고 축의금을 간편하게 전달해보세요!</p>
    } else {
      msg = <p>{marriage.male.name}❤️ {marriage.lady.name}의 결혼식에 참석하셨네요! 방명록을 남기고 축의금을 간편하게 전달해보세요!</p>
    }
  } else if (person) {
    msg = <p>{person.name}님의 결혼식에 참석하지는 못했지만, 축하하는 마음으로 방명록을 남기고 축의금을 간편하게 전달해보세요!</p>
  }

  const onClick = useCallback(() => {
    dispatch(RootActions.marriage.marriageEntry());
  }, [dispatch]);

  return (
    <>
      <PageHeader title="방명록" />
      <Space direction="vertical" style={{ margin: '8px' }}>
        {marriage && <MarriageCard marriage={marriage} />}
        {msg}
        <button type="button" className="btn btn-primary" onClick={onClick}>다음</button>
      </Space>
    </>
  )
}
