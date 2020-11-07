import { Button, InputNumber, PageHeader, Space, Spin } from 'antd';
import queryString from 'query-string';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { RootActions } from 'src/features';

export default function GuestbookPaymentPage() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState(30000);
  const [loading, setLoading] = useState(false);

  const qrcode = queryString.parse(location.search)['qrcode'];
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
    setLoading(true);
    dispatch(RootActions.payment.ready.request({ amount: value }));
  }, [dispatch, value]);

  return (
    <Spin tip="Loading..." size="large" spinning={loading}>
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
