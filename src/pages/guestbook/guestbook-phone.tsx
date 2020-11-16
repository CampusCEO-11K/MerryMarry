import { PageHeader, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { guestbookPhone } from 'src/features/guestbook/phone';

export default function GuestbookPhonePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    phone: '',
  });

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setState(v => ({
      ...v,
      [name]: value
    }));
  }, []);

  const onNext = useCallback(() => {
    dispatch(guestbookPhone(state));
  }, [dispatch, state]);

  return (
    <>
      <PageHeader title="방명록" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <form>
          <div className="form-group">
            <label>예비신랑/신부의 전화번호</label>
            <input type="number" className="form-control" name="phone" onChange={onChange} />
          </div>
        </form>
        <button type="button" className="btn btn-primary" onClick={onNext}>다음</button>
      </Space>
    </>
  )
}
