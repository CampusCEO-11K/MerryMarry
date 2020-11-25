import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TopBar } from 'src/components';
import { RootActions, RootState } from 'src/features';
import { getNameFromMarriage } from 'src/utils';
import './guestbook-workflow-1-entry.scss';

export default function GuestbookWorkflowEntryPage() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.guestbook.workflow);
  const { marriage, isOnline } = state;

  let msg = <div />;
  if (marriage) {
    const name = getNameFromMarriage(marriage);

    if (isOnline) {
      msg = <p>{name}의 결혼식에 참석하지는 못했지만,<br />축하하는 마음으로 방명록을 남기고<br />축의금을 간편하게 전달해보세요!</p>
    } else {
      msg = <p>{name}의 결혼식에 참석하셨네요!<br />방명록을 남기고 축의금을 간편하게 전달해보세요!</p>
    }
  }

  const onClick = useCallback(() => {
    dispatch(RootActions.guestbook.workflow.entry());
  }, [dispatch]);

  return (
    <>
      <TopBar title="방명록" />
      <div className="guestbook-workflow-1-entry">
        <div className="layout-1">
          <div className="icon"></div>
          <div className="title">
            {msg}
          </div>
        </div>
        <button type="button" className="btn" onClick={onClick}>다음</button>
      </div>
    </>
  )
}
