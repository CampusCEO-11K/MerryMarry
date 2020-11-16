import { PageHeader, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootActions } from 'src/features';

export default function GuestbookPaymentPage() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(30000);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  }, []);

  const onPayment = useCallback(() => {
    dispatch(RootActions.marriage.marriagePayment(value));
  }, [dispatch, value]);

  const onSkip = useCallback(() => {
    dispatch(RootActions.marriage.marriagePayment(undefined));
  }, [dispatch]);

  const onBack = useCallback(() => {
    dispatch(RootActions.marriage.marriageStepback())
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
