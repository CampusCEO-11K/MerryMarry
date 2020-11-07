import React, { useEffect } from 'react'
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootActions, RootState } from 'src/features';
import { PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

export default function PaymentSuccessPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tid = useSelector((state: RootState) => state.payment.ready.tid);
  const paymentApproveResult = useSelector((state: RootState) => state.payment.approve.result);
  const pg_token = (queryString.parse(window.location.search).pg_token || '').toString();

  useEffect(() => {
    if (tid) {
      dispatch(RootActions.payment.approve.request({ pg_token, tid }));
    }
  }, [dispatch, pg_token, tid]);
  
  if (!tid) {
    return (
      <div>
        잘못된 접근입니다.
      </div>
    )
  }

  if (paymentApproveResult) {
    window.close();
  }

  return (
    <>
      <PageHeader title="카카오페이 성공" onBack={history.goBack} />
      <p>pg_token: {pg_token}</p>
      <p>tid: {tid}</p>
      {paymentApproveResult && <p>성공</p>}
    </>
  )
}
