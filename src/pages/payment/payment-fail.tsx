import { PageHeader } from 'antd';
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function PaymentFailPage() {
  const history = useHistory();

  return (
    <>
      <PageHeader title="카카오페이 실패" onBack={history.goBack} />
    </>
  )
}
