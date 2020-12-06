import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { TabBarTab } from 'src/components/tab-bar';
import { writeGuestbookRequest } from 'src/features/guestbook/write-guestbook';
import MainLayout from '../../layouts/main-layout';
import './guestbook-comment-write.scss';

export default function GuestbookCommentWritePage() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const marriageId = parseInt((match.params as any)['marriageId']);

  const onSubmit = useCallback(() => {
    dispatch(writeGuestbookRequest({
      marriageId,
      msg: textareaRef.current?.value || '',
    }))
  }, [marriageId, textareaRef, dispatch]);

  const onVoice = useCallback(() => {
    alert('준비중입니다.')
  }, []);

  return (
    <MainLayout title="방명록 남기기" onBack={true} currentTab={TabBarTab.guestbook}>
      <div id="guestbook-comment-write">
        <div id="msg1">축하 메시지를 작성해주세요</div>
        <div id="textarea-container">
          <div id="textarea-label">메시지</div>
          <textarea placeholder="0/1000" ref={textareaRef} />
        </div>
        <div className="btn-bar">
          <button className="btn" onClick={onVoice}>음성으로 남기기</button>
          <button className="btn" onClick={onVoice}>영상으로 남기기</button>
        </div>
        <button className="next-btn btn" onClick={onSubmit}>다음</button>
      </div>
    </MainLayout>
  )
}
