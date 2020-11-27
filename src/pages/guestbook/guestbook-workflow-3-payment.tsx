import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guestbookWorkflowPayment } from 'src/features/guestbook/workflow/4-payment';
import { RootActions, RootState } from 'src/store';
import MainLayout from '../layouts/main-layout';
import './guestbook-workflow-3-payment.scss';

export default function GuestbookWorkflowPaymentPage() {
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) => state.guestbookWorkflow.amount);
  const inputRef = useRef<HTMLInputElement>(null);

  const onPayment = useCallback(() => {
    const amount = parseInt(inputRef.current!.value);
    dispatch(guestbookWorkflowPayment({ amount }));
  }, [dispatch, inputRef]);

  const onSkip = useCallback(() => {
    dispatch(guestbookWorkflowPayment({ amount: 0 }));
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(RootActions.guestbookWorkflow.back());
  }, [dispatch]);

  return (
    <MainLayout title="축의금 송금" onBack={onBack}>
      <div className="guestbook-workflow-3-payment">
        <p className="title">축의금도 간편하게 전달하시겠어요?</p>
        <input
          ref={inputRef}
          className="form-control"
          placeholder="금액을 입력해주세요"
          type="number"
          defaultValue={amount || undefined}
        />
        <button type="button" className="btn payment-btn" onClick={onPayment}>
          송금하기
        </button>
        <button type="button" className="btn skip-btn" onClick={onSkip}>
          건너뛰기
        </button>
      </div>
    </MainLayout>
  )
}
