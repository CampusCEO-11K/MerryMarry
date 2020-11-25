import { PageHeader, Space } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { tossReadyRequest } from 'src/features/toss/ready';

export default function PaymentTestPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    const amount = parseInt(inputRef.current!.value);
    dispatch(tossReadyRequest({ amount, orderName: '토스페이먼츠 테스트' }));
  }, [dispatch, inputRef]);

  return (
    <>
      <PageHeader title="토스페이먼츠 테스트" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <input
          className="form-control"
          type="number"
          ref={inputRef}
        />
        <button type="button" className="btn btn-primary" onClick={onClick}>토스페이먼츠 결제 테스트</button>
      </Space>
    </>
  )
}
