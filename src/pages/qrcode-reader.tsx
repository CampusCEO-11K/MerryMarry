import React, { useCallback, useState } from 'react';
import QrReader from 'react-qr-reader';

export default function QrcodeReaderPage() {
  const [value, setValue] = useState('');

  const onScan = useCallback((data: string | null) => {
    setValue(data || 'null');
  }, []);

  const onError = useCallback((err: any) => {
    setValue(err.toString());
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <QrReader
        delay={300}
        onError={onError}
        onScan={onScan}
        style={{ width: '100%' }}
      />
      <p>{value}</p>
    </div>
  )
}