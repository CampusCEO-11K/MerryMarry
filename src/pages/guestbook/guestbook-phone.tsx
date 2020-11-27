import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { findGuestbookByPhone } from 'src/features/guestbook/find-guestbook-or-create';
import MainLayout from '../layouts/main-layout';
import './guestbook-phone.scss';

export default function GuestbookPhonePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState({
    name: '',
    phone: '',
    isMale: true,
  });

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setState(v => ({
      ...v,
      [name]: value
    }));
  }, []);

  const onRadioChange = useCallback((e) => {
    setState(v => ({
      ...v,
      isMale: e.target.value === 'male'
    }))
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
    <MainLayout title="방명록" onBack={true}>
      <div className="guestbook-phone">
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
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender-radio" value="male" checked={state.isMale} onChange={onRadioChange} />
              <label className="form-check-label">신랑</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender-radio" value="lady" checked={!state.isMale} onChange={onRadioChange} />
              <label className="form-check-label">신부</label>
            </div>
          </div>
          <button className="btn">다음</button>
        </form>
      </div>
    </MainLayout>
  )
}
