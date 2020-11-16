import { PageHeader, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootActions } from 'src/features';

export default function GuestbookPhonePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
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
    dispatch(RootActions.marriage.marragePhoneAction(state));
  }, [dispatch, state]);

  return (
    <>
      <PageHeader title="방명록" onBack={history.goBack} />
      <Space direction="vertical" style={{ margin: '8px' }}>
        <form>
          <div className="form-group">
            <label>예비신랑/신부의 성함</label>
            <input type="text" className="form-control" name="name" onChange={onChange} />
          </div>
          <div className="form-group">
            <label>예비신랑/신부의 전화번호</label>
            <input type="text" className="form-control" name="phone" onChange={onChange} />
          </div>
        </form>
        <button type="button" className="btn btn-primary" onClick={onNext}>다음</button>
      </Space>
    </>
  )
}
