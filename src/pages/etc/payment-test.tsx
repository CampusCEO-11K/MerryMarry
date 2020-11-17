import { InputNumber, PageHeader, Space, Spin } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootActions, RootState } from 'src/features';

export default function PaymentTestPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState(30000);
  const loading = useSelector((state: RootState) => state.payment.loading);
  const status = useSelector((state: RootState) => state.payment.status);

  const onChange = useCallback((v: string | number | undefined) => {
    if (typeof v === 'string') {
      setValue(parseInt(v))
    } else if (typeof v === 'number') {
      setValue(v);
    } else {
      setValue(0);
    }
  }, []);

  const formatter = useCallback((v: string | number | undefined) => {
    const tmp = (v || '').toString()
      .replace(/^0+/, '')
      .replace(/\D+/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `₩ ${tmp || 0}`
  }, []);

  const parser = useCallback((v: string | number | undefined) => {
    return (v || '').toString().replace(/\D+/g, '');
  }, []);

  const onClick = useCallback(() => {
    dispatch(RootActions.payment.paymentRequest({ amount: value, itemName: '카카오페이 테스트' }));
  }, [dispatch, value]);

  return (
    <Spin tip={status} size="large" spinning={loading}>
      <PageHeader title="카카오페이 테스트" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <InputNumber
          style={{ width: '100%' }}
          defaultValue={value}
          formatter={formatter}
          parser={parser}
          onChange={onChange}
        />
        <div
          className="flex-center"
          style={{ backgroundColor: '#ffe812', height: '100px' }}
          onClick={onClick}
        >
          카카오페이 결제 테스트
      </div>
      </Space>
    </Spin>
  )
}
