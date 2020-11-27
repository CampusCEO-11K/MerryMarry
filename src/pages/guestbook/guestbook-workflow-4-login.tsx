import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { guestbookWorkflowLoginRequest, guestbookWorkflowLoginSkip } from 'src/features/guestbook/workflow/5-login';
import { RootActions } from 'src/store';
import MainLayout from '../layouts/main-layout';
import './guestbook-workflow-4-login.scss';

export default function GuestbookWorkflowLoginPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: '',
    password: '',
  })

  const onLogin = useCallback(() => {
    dispatch(guestbookWorkflowLoginRequest(state));
  }, [dispatch, state]);

  const onSkip = useCallback(() => {
    dispatch(guestbookWorkflowLoginSkip());
  }, [dispatch]);

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setState(v => ({
      ...v,
      [name]: value
    }));
  }, []);

  const onBack = useCallback(() => {
    dispatch(RootActions.guestbookWorkflow.back())
  }, [dispatch]);

  return (
    <MainLayout title="로그인" onBack={onBack}>
      <div className="guestbook-workflow-4-login">
        <div className="top-btn-bar">
          <div className="member-btn">회원</div>
          <div className="non-member-btn" onClick={onSkip}>비회원</div>
        </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" name="username" onChange={onChange} placeholder="아이디" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" onChange={onChange} placeholder="비밀번호" />
          </div>
        </form>
        <button type="submit" className="btn login-btn" onClick={onLogin}>LOGIN</button>
        <div className="btn-bar">
          <button type="submit" className="register-btn">회원가입</button>
          <button type="submit" className="find-username-btn">아이디찾기</button>
          <button type="submit" className="find-password-btn">비밀번호찾기</button>
        </div>
      </div>
    </MainLayout>
  )
}
