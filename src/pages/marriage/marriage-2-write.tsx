import { PageHeader, Space } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GuestbookForm } from 'src/components';
import { RootActions } from 'src/features';
import { Guestbook } from 'src/models';

export default function GuestbookWritePage() {
  const dispatch = useDispatch();

  const onNext = useCallback((guestbook: Guestbook) => {
    dispatch(RootActions.marriage.marriageWrite(guestbook))
  }, [dispatch]);

  const onSkip = useCallback(() => {
    dispatch(RootActions.marriage.marriageWrite())
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(RootActions.marriage.marriageStepback())
  }, [dispatch]);

  return (
    <>
      <PageHeader title="방명록 남기기" onBack={onBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <GuestbookForm onSubmit={onNext} onSkip={onSkip} />
        <button type="button" className="btn btn-secondary" disabled>음성으로 남기기</button>
        <button type="button" className="btn btn-secondary" disabled>영상으로 남기기</button>
      </Space>
    </>
  )
}
