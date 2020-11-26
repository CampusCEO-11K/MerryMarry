import { PageHeader, Space } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { findGuestbookByPhone } from 'src/features/guestbook/find-guestbook-or-create';

export default function GuestbookPhonePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState({
    name: '',
    phone: '',
    isMale: false,
  });

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setState(v => ({
      ...v,
      [name]: value
    }));
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current?.checkValidity()) {
      dispatch(findGuestbookByPhone(state));
    } else {
      form.current?.classList.add('was-validated');
    }
  }, [dispatch, state]);

  return (
    <>
      <PageHeader title="방명록" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <form className="needs-validation" onSubmit={onSubmit} ref={form} noValidate>
          <div className="form-group">
            <label>예비신랑/신부의 이름</label>
            <input type="text" className="form-control" name="name" onChange={onChange} required />
            <div className="invalid-feedback">이름을 입력해주세요</div>
          </div>
          <div className="form-group">
            <label>예비신랑/신부의 전화번호</label>
            <input type="number" className="form-control" name="phone" onChange={onChange} required />
            <div className="invalid-feedback">전화번호를 입력해주세요</div>
          </div>
          <button type="submit" className="btn btn-primary">다음</button>
        </form>
      </Space>
    </>
  )
}
