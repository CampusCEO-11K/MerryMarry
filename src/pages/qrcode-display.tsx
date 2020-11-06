import React, { useCallback, useState } from 'react';
import { PageHeader, Input } from 'antd';
import QRCode from 'qrcode.react';
import { useHistory } from 'react-router-dom';

const { TextArea } = Input;

export default function QrcodeDisplayPage() {
  const history = useHistory();
  const [value, setValue] = useState('https://www.naver.com');

  const onValueChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <PageHeader
        onBack={history.goBack}
        title="QrcodeDisplayPage"
      />
      <TextArea
        autoSize
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