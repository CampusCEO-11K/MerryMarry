import { Button, InputNumber, PageHeader, Space, Spin } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { RootActions, RootState } from 'src/features';
import { guestbook_success } from 'src/utils/routes';

export default function GuestbookPaymentPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState(30000);
  const loading = useSelector((state: RootState) => state.payment.loading);
  const status = useSelector((state: RootState) => state.payment.status);

  const nextLink = "/";

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
    dispatch(RootActions.payment.paymentRequest({ amount: value, redirect: guestbook_success }));
  }, [dispatch, value]);

  return (
    <Spin tip={status} size="large" spinning={loading}>
      <PageHeader title="축의금 송금" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <p>축의금도 간편하게 전달하시겠어요?</p>
        <InputNumber
          size="large"
          style={{ width: '100%' }}
          defaultValue={value}
          formatter={formatter}
          parser={parser}
          onChange={onChange}
        />
        <Button type="primary" onClick={onClick}>
          카카오 페이 결제
        </Button>
        <Button type="primary">
          <Link to={nextLink}>다음</Link>
        </Button>
        <Button type="primary">
          <Link to={nextLink}>건너뛰기</Link>
        </Button>
      </Space>
    </Spin>
  )
}
