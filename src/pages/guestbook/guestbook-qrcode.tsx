import React, { useCallback, useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import { guestbook_workflow } from 'src/utils/routes';
import { MainLayout } from '..';

export default function GuestbookQrcodePage() {
  const history = useHistory();
  const [value, setValue] = useState('');

  const onScan = useCallback((data: string | null) => {
    if (data) {
      const path = data.replace(/https?:\/\/[^/]+/g, '');
      history.push(path);
    } else {
      setValue('QR코드를 읽는데 실패했습니다');
    }
  }, [history]);

  const onError = useCallback((err: any) => {
    setValue(err.toString());
  }, []);

  const onSkip = useCallback(() => {
    history.push(guestbook_workflow({ marriageId: 1, isOnline: false }));
  }, [history])

  return (
    <MainLayout title="QR코드 인식" onBack={true}>
      <QrReader
        delay={300}
        onError={onError}
        onScan={onScan}
        style={{ width: '100%' }}
      />
      <p>{value}</p>
      <button type="button" className="btn btn-primary" onClick={onSkip}>Skip</button>
    </MainLayout>
  )
}