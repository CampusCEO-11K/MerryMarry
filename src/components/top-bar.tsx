import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './top-bar.scss';

interface Props {
  title: string;
  onBack?: (() => void) | boolean;
  leftBtns?: React.ReactNode;
  rightBtns?: React.ReactNode;
}

export function TopBar(props: Props) {
  const history = useHistory();
  const { title, onBack, leftBtns, rightBtns } = props;

  const onBackClicked = useCallback(() => {
    if (onBack === true) {
      history.goBack();
    } else if (typeof onBack === 'function') {
      onBack();
    }
  }, [history, onBack]);

  return (
    <div className="top-bar">
      <div className="left">
        {onBack !== undefined && <i className="material-icons back-btn" onClick={onBackClicked}>keyboard_arrow_left</i>}
        {leftBtns}
      </div>
      <span className="title">{title}</span>
      <div className="right">
        {rightBtns}
      </div>
    </div>
  )
}
