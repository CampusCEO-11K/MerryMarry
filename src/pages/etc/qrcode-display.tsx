import React, { useCallback, useState } from 'react';
import QRCode from 'qrcode.react';
import { useHistory } from 'react-router-dom';
import { TopBar } from 'src/components';


export default function QrcodeDisplayPage() {
  const history = useHistory();
  const [value, setValue] = useState('https://www.naver.com');

  const onValueChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <TopBar
        onBack={true}
        title="QrcodeDisplayPage"
      />
      <textarea
        defaultValue={value}
        onChange={onValueChange}
        style={{ marginTop: '8px' }}
      />
      <div style={{ margin: '8px' }}>
        <QRCode value={value} />
      </div>
    </div>
  )
}