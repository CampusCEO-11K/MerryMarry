import { PageHeader, Space } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, RootActions } from 'src/store';
import { guestbookWorkflowPayment } from 'src/features/guestbook/workflow/4-payment';

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
    <>
      <PageHeader title="축의금 송금" onBack={onBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>축의금도 간편하게 전달하시겠어요?</p>
        <input
          ref={inputRef}
          className="form-control"
          placeholder="금액을 입력해주세요"
          type="number"
          defaultValue={amount?.toString()}
        />
        <button type="button" className="btn btn-primary" onClick={onPayment}>
          카카오 페이 결제
        </button>
        <button type="button" className="btn btn-primary" onClick={onSkip}>
          건너뛰기
        </button>
      </Space>
    </>
  )
}
