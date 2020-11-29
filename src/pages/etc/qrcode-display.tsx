import QRCode from 'qrcode.react';
import React, { useCallback, useState } from 'react';
import MainLayout from '../layouts/main-layout';

export default function QrcodeDisplayPage() {
  const [value, setValue] = useState('https://www.naver.com');

  const onValueChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <MainLayout title="QrcodeDisplayPage" onBack={true}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "cetner "}}>
        <textarea
          defaultValue={value}
          onChange={onValueChange}
          style={{ marginTop: '8px' }}
        />
        <div style={{ margin: '8px' }}>
          <QRCode value={value} />
        </div>
      </div>

    </MainLayout>
  )
}