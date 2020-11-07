import { InputNumber, PageHeader } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootActions } from 'src/features';

export default function PaymentTestPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState(30000);

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
    dispatch(RootActions.payment.ready.request({ amount: value }))
  }, [dispatch, value]);

  return (
    <>
      <PageHeader title="카카오페이 테스트" onBack={history.goBack} />
      <InputNumber
        style={{ width: '100%', marginTop: '16px' }}
        defaultValue={value}
        formatter={formatter}
        parser={parser}
        onChange={onChange}
      />
      <div
        className="flex-center"
        style={{ backgroundColor: '#ffe812', height: '100px', marginTop: '16px' }}
        onClick={onClick}
      >
        카카오페이 결제 테스트
      </div>
    </>
  )
}
