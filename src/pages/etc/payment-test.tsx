import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TopBar } from 'src/components';
import { paymentKakaoRequest } from 'src/features/payment/kakao';

export default function PaymentTestPage() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(30000);

  const onChange = useCallback((e) => {
    setValue(parseInt(e.target.value));
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
    dispatch(paymentKakaoRequest({ amount: value, itemName: '카카오페이 테스트' }));
  }, [dispatch, value]);

  return (
    <>
      <TopBar title="카카오페이 테스트" onBack={true} />
      <div>
        <input
          style={{ width: '100%' }}
          defaultValue={value}
          onChange={onChange}
        />
        <div
          style={{ backgroundColor: '#ffe812', height: '100px' }}
          onClick={onClick}
        >
          카카오페이 결제 테스트
        </div>
      </div>
    </>
  )
}
