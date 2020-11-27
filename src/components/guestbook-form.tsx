import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import './guestbook-form.scss';

interface Props {
  onSubmit: (guestbook: {name: string, belong: string, msg: string}) => void;
}

export default function GuestbookForm(props: Props) {
  const form = useRef<HTMLFormElement>(null);
  const name = useSelector((state: RootState) => state.auth.user?.name);
  const workflow = useSelector((state: RootState) => state.guestbookWorkflow);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current?.checkValidity()) {
      const name = (e.target as any).name.value;
      const belong = (e.target as any).belong.value;
      const msg = (e.target as any).msg.value;
      props.onSubmit({ name, belong, msg });
    } else {
      form.current?.classList.add('was-validated');
    }
  }, [props]);
  
  return (
    <form className="needs-validation guestbook-form" ref={form} onSubmit={onSubmit} noValidate>
      <div className="form-group">
        <input
          className="form-control"
          name="name"
          defaultValue={name ? undefined : workflow.name}
          placeholder={name ? undefined : "이름"}
          required
          readOnly={!!name}
          value={name}
        />
        <div className="invalid-feedback">본인의 이름을 입력해주세요!</div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="belong"
          defaultValue={workflow.belong}
          placeholder="소속"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="msg"
          defaultValue={workflow.msg}
          placeholder="메시지"
        />
      </div>
      <button type="submit" className="btn skip-btn">건너뛰기</button>
      <button type="submit" className="btn next-btn">다음</button>
    </form>
  );
};