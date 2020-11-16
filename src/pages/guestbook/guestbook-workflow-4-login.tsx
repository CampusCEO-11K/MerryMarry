import { PageHeader, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootActions } from 'src/features';
import { guestbookWorkflowLoginSkip } from 'src/features/guestbook/workflow/payment';
import { guestbookWorkflowBack } from 'src/features/guestbook/workflow/go-back';

export default function GuestbookWorkflowLoginPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: '',
    password: '',
  })

  const onLogin = useCallback(() => {
    dispatch(RootActions.auth.authLoginRequest(state));
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
    dispatch(guestbookWorkflowBack())
  }, [dispatch]);

  return (
    <>
      <PageHeader title="로그인" onBack={onBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <form>
          <div className="form-group">
            <label>아이디</label>
            <input type="text" className="form-control" name="username" onChange={onChange} />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input type="password" className="form-control" name="password" onChange={onChange} />
          </div>
        </form>
        <button type="submit" className="btn btn-primary" onClick={onLogin}>로그인</button>
        <button type="submit" className="btn btn-primary" onClick={onSkip}>비회원으로 계속하기</button>
        <button type="submit" className="btn btn-primary" disabled>회원가입</button>
        <button type="submit" className="btn btn-primary" disabled>아이디찾기</button>
        <button type="submit" className="btn btn-primary" disabled>비밀번호찾기</button>
      </Space>
    </>
  )
}
