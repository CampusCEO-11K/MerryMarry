import { PageHeader, Space } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootActions, RootState } from 'src/features';
import { guestbookWorkflowPayment } from 'src/features/guestbook/workflow/payment';

export default function GuestbookWorkflowPaymentPage() {
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) => state.guestbook.workflow.amount);
  const inputRef = useRef<HTMLInputElement>(null);

  const onPayment = useCallback(() => {
    const value = parseInt(inputRef.current!.value);
    dispatch(guestbookWorkflowPayment(value));
  }, [dispatch, inputRef]);

  const onSkip = useCallback(() => {
    dispatch(guestbookWorkflowPayment());
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(RootActions.guestbook.workflow.back())
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
