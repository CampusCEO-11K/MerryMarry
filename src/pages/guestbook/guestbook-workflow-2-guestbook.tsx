import { PageHeader, Space } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuestbookForm } from 'src/components';
import { RootState } from 'src/features';
import { guestbookWorkflowBack } from 'src/features/guestbook/workflow/go-back';
import { guestbookWorkflowGuestbook } from 'src/features/guestbook/workflow/guestbook';
import { Guestbook } from 'src/models';

export default function GuestbookWorflowGuestbookPage() {
  const dispatch = useDispatch();
  const guestbook = useSelector((state: RootState) => state.guestbook.workflow.guestbook);

  const onNext = useCallback((guestbook: Guestbook) => {
    dispatch(guestbookWorkflowGuestbook(guestbook))
  }, [dispatch]);

  const onSkip = useCallback(() => {
    dispatch(guestbookWorkflowGuestbook())
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(guestbookWorkflowBack())
  }, [dispatch]);

  return (
    <>
      <PageHeader title="방명록 남기기" onBack={onBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <GuestbookForm onSubmit={onNext} onSkip={onSkip} defaultValue={guestbook} />
        <button type="button" className="btn btn-secondary" disabled>음성으로 남기기</button>
        <button type="button" className="btn btn-secondary" disabled>영상으로 남기기</button>
      </Space>
    </>
  )
}
