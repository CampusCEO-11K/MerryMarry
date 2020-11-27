import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TopBar } from 'src/components';
import { tossReadyRequest } from 'src/features/payment/toss';

export default function PaymentTestPage() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    const amount = parseInt(inputRef.current!.value);
    dispatch(tossReadyRequest({ amount, orderName: '토스페이먼츠 테스트' }));
  }, [dispatch, inputRef]);

  return (
    <>
      <TopBar title="토스페이먼츠 테스트" onBack={true} />
      <div>
        <input
          className="form-control"
          type="number"
          ref={inputRef}
        />
        <button type="button" className="btn btn-primary" onClick={onClick}>토스페이먼츠 결제 테스트</button>
      </div>
    </>
  )
}
