import qs from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tossApproveRequest } from 'src/features/toss/approve';
import { tossReadyFailure } from 'src/features/toss/ready';

export default function TossReadyResultPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const parsed = qs.parse(window.location.search, { parseNumbers: true });

    const status = parsed.status as string;
    if (status === 'success') {
      const paymentKey = parsed.paymentKey as string;
      const orderId = parsed.orderId as string;
      const amount = parsed.amount as number;
      dispatch(tossApproveRequest({ paymentKey, orderId, amount }));
    } else {
      const code = parsed.code as string;
      const message = parsed.message as string;
      dispatch(tossReadyFailure({ code, message }));
    }
  }, [dispatch]);

  return (
    <div>
      {JSON.stringify(qs.parse(window.location.search), null, 2)}
    </div>
  )
}
