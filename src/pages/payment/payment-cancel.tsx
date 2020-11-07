import { PageHeader } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function PaymentCancelPage() {
  const history = useHistory();

  return (
    <>
      <PageHeader title="카카오페이 취소" onBack={history.goBack} />
    </>
  )
}
