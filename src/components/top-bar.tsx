import React from 'react';
import './top-bar.scss';

interface Props {
  title: string;
}

export function TopBar(props: Props) {
  return (
    <div className="top-bar">
      <span>{props.title}</span>
    </div>
  )
}
