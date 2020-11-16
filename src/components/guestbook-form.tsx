import React, { useCallback, useState } from 'react';
import { Guestbook } from 'src/models';

interface Props {
  onSkip: () => void;
  onSubmit: (guestbook: Guestbook) => void;
}

export default function GuestbookForm(props: Props) {
  const [guestbook, setGuestbook] = useState({
    name: '',
    belong: '',
    msg: '',
  } as Guestbook);

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setGuestbook(v => ({
      ...v,
      [name]: value
    }));
  }, []);

  const onSubmit = useCallback(() => {
    props.onSubmit(guestbook);
  }, [props, guestbook]);

  return (
    <div>
      <div className="form-group">
        <label>이름</label>
        <input className="form-control" name="name" value={guestbook.name} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>소속</label>
        <input className="form-control" name="belong" value={guestbook.belong} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>메시지</label>
        <textarea className="form-control" name="msg" value={guestbook.msg} onChange={onChange} />
      </div>
      <button type="button" className="btn btn-primary" onClick={props.onSkip}>건너뛰기</button>
      <button type="button" className="btn btn-primary" onClick={onSubmit}>다음</button>
    </div>
  );
};