import { PageHeader, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/features';
import { guestbookWorkflowBack } from 'src/features/guestbook/workflow/go-back';
import { guestbookWorkflowPayment } from 'src/features/guestbook/workflow/payment';

export default function GuestbookWorkflowPaymentPage() {
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) => state.guestbook.workflow.amount);
  const [value, setValue] = useState(amount || 30000);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value || '0'));
  }, []);

  const onPayment = useCallback(() => {
    dispatch(guestbookWorkflowPayment(value));
  }, [dispatch, value]);

  const onSkip = useCallback(() => {
    dispatch(guestbookWorkflowPayment());
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(guestbookWorkflowBack())
  }, [dispatch]);

  return (
    <>
      <PageHeader title="축의금 송금" onBack={onBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>축의금도 간편하게 전달하시겠어요?</p>
        <input
          className="form-control"
          placeholder="금액을 입력해주세요"
          type="number"
          value={value}
          onChange={onChange}
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
