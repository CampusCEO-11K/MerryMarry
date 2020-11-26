import qs from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tossReadySuccess, tossReadyFailure } from 'src/features/payment/toss';

export default function TossReadyResultPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const parsed = qs.parse(window.location.search, { parseNumbers: true });

    const status = parsed.status as string;
    if (status === 'success') {
      const paymentKey = parsed.paymentKey as string;
      const orderId = parsed.orderId as string;
      const amount = parsed.amount as number;
      dispatch(tossReadySuccess({ paymentKey, orderId, amount }));
    } else {
      const code = parsed.code as string;
      const message = parsed.message as string;
      dispatch(tossReadyFailure({ code, message }));
    }
  }, [dispatch]);

  return (
    <div>
      처리중입니다...
    </div>
  )
}
