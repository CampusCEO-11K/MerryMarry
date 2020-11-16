import { Button, PageHeader, Spin } from 'antd';
import React, { useCallback, useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

export default function GuestbookQrcodePage() {
  const history = useHistory();
  const [value, setValue] = useState('');

  const onScan = useCallback((data: string | null) => {
    if (data) {
      // const path = data.replace(/https?:\/\/[^/]+/g, '');
      // const regexp = new RegExp(marriage_guestbook_func('\\d+'));
      // if (path.match(regexp)) {
      //   history.push(path);
      // } else {
      //   setValue('잘못된 형식의 QR코드입니다');
      // }
    } else {
      setValue('QR코드를 읽는데 실패했습니다');
    }
  }, []);

  const onError = useCallback((err: any) => {
    setValue(err.toString());
  }, []);

  const onSkip = useCallback(() => {
    // history.push(marriage_guestbook_func('160000000'));
  }, [])

  return (
    <Spin style={{ height: '100%' }} spinning={false}>
      <PageHeader title="QR코드 인식" onBack={history.goBack} />
      <QrReader
        delay={300}
        onError={onError}
        onScan={onScan}
        style={{ width: '100%' }}
      />
      <p>{value}</p>
      <Button onClick={onSkip}>Skip</Button>
    </Spin>
  )
}