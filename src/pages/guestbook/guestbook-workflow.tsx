import qs from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guestbookWorkflowInit } from 'src/features/guestbook/workflow/1-init';
import { RootState } from 'src/store';
import { GuestbookWorkflowStoreStep } from 'src/store/guestbook-workflow';
import GuestbookWorkflowEntryPage from './guestbook-workflow-1-entry';
import GuestbookWorkflowGuestbookPage from './guestbook-workflow-2-guestbook';
import GuestbookWorkflowPaymentPage from './guestbook-workflow-3-payment';
import GuestbookWorkflowLoginPage from './guestbook-workflow-4-login';
import GuestbookWorkflowSuccessPage from './guestbook-workflow-5-success';

export default function GuestbookWorkflowPage() {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.guestbookWorkflow.step);

  const parsed = qs.parse(window.location.search, { parseBooleans: true, parseNumbers: true });
  const marriageId = parsed.marriageId as number;
  const isOnline = parsed.isOnline as boolean;

  useEffect(() => {
    dispatch(guestbookWorkflowInit({ marriageId, isOnline }));
  }, [dispatch, marriageId, isOnline]);

  switch(step) {
    case GuestbookWorkflowStoreStep.entry: return (
      <GuestbookWorkflowEntryPage />
    )
    case GuestbookWorkflowStoreStep.guestbook: return (
      <GuestbookWorkflowGuestbookPage />
    )
    case GuestbookWorkflowStoreStep.payment: return (
      <GuestbookWorkflowPaymentPage />
    )
    case GuestbookWorkflowStoreStep.login: return (
      <GuestbookWorkflowLoginPage />
    )
    case GuestbookWorkflowStoreStep.success: return (
      <GuestbookWorkflowSuccessPage />
    )
    default: return <div />
  }
}
