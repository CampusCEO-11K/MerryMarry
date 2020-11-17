import qs from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/features';
import { GuestbookWorflowStep } from 'src/features/guestbook/workflow';
import { guestbookWorkflowInit } from 'src/features/guestbook/workflow/init';
import GuestbookWorkflowEntryPage from './guestbook-workflow-1-entry';
import GuestbookWorkflowGuestbookPage from './guestbook-workflow-2-guestbook';
import GuestbookWorkflowPaymentPage from './guestbook-workflow-3-payment';
import GuestbookWorkflowLoginPage from './guestbook-workflow-4-login';
import GuestbookWorkflowSuccessPage from './guestbook-workflow-5-success';

export default function GuestbookWorkflowPage() {
  const dispatch = useDispatch();
  const { step } = useSelector((state: RootState) => state.guestbook.workflow);

  const parsed = qs.parse(window.location.search, { parseBooleans: true, parseNumbers: true });
  const marriageId = parsed.marriageId as number;
  const isOnline = parsed.isOnline as boolean;

  useEffect(() => {
    dispatch(guestbookWorkflowInit({ marriageId, isOnline }));
  }, [dispatch, marriageId, isOnline]);

  switch(step) {
    case GuestbookWorflowStep.entry: return (
      <GuestbookWorkflowEntryPage />
    )
    case GuestbookWorflowStep.guestbook: return (
      <GuestbookWorkflowGuestbookPage />
    )
    case GuestbookWorflowStep.payment: return (
      <GuestbookWorkflowPaymentPage />
    )
    case GuestbookWorflowStep.login: return (
      <GuestbookWorkflowLoginPage />
    )
    case GuestbookWorflowStep.success: return (
      <GuestbookWorkflowSuccessPage />
    )
    default: return <div />
  }
}
