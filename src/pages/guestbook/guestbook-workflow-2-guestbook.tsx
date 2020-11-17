import { PageHeader, Space } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GuestbookForm } from 'src/components';
import { RootActions } from 'src/features';

export default function GuestbookWorflowGuestbookPage() {
  const dispatch = useDispatch();

  const onSubmit = useCallback((guestbook: { name: string, belong: string, msg: string }) => {
    dispatch(RootActions.guestbook.workflow.guestbook(guestbook))
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(RootActions.guestbook.workflow.back())
  }, [dispatch]);

  return (
    <>
      <PageHeader title="방명록 남기기" onBack={onBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <GuestbookForm onSubmit={onSubmit} />
        <button type="button" className="btn btn-secondary" disabled>음성으로 남기기</button>
        <button type="button" className="btn btn-secondary" disabled>영상으로 남기기</button>
      </Space>
    </>
  )
}
