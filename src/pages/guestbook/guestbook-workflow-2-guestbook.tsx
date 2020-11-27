import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuestbookForm, MarriageCard, TopBar } from 'src/components';
import { guestbookWorkflowGuestbook } from 'src/features/guestbook/workflow/3-guestbook';
import { RootActions, RootState } from 'src/store';
import MainLayout from '../layouts/main-layout';
import './guestbook-workflow-2-guestbook.scss';

export default function GuestbookWorflowGuestbookPage() {
  const dispatch = useDispatch();
  const marriage = useSelector((state: RootState) => state.guestbookWorkflow.marriage);

  const onSubmit = useCallback((guestbook: { name: string, belong: string, msg: string }) => {
    dispatch(guestbookWorkflowGuestbook(guestbook))
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(RootActions.guestbookWorkflow.back())
  }, [dispatch]);

  return (
    <MainLayout title="방명록 남기기" onBack={onBack}>
      <div className="guestbook-workflow-2-guestbook">
        {marriage && <MarriageCard marriage={marriage} />}
        <GuestbookForm onSubmit={onSubmit} />
      </div>
    </MainLayout>
  )
}
