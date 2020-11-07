import { Button, PageHeader } from 'antd';
import React, { useCallback, useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import { guestbook_entry } from 'src/utils/routes';

export default function GuestbookQrcodePage() {
  const [value, setValue] = useState('');
  const history = useHistory();

  const onScan = useCallback((data: string | null) => {
    if (data) {
      history.push(guestbook_entry(data));
    }
  }, [history]);

  const onError = useCallback((err: any) => {
    setValue(err.toString());
  }, []);

  const onSkip = useCallback(() => {
    history.push(guestbook_entry(Date.now().toString()));
  }, [history])

  return (
    <div style={{ height: '100%' }}>
      <PageHeader title="QR코드 인식" onBack={history.goBack} />
      <QrReader
        delay={300}
        onError={onError}
        onScan={onScan}
        style={{ width: '100%' }}
      />
      <p>{value}</p>
      <Button onClick={onSkip}>Skip</Button>
    </div>
  )
}