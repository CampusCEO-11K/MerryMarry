import React from 'react'
import { vows } from 'src/svgs'
import './comment-write-btn.scss';

interface Props {
  onClick: () => void;
}

export default function CommentWriteBtn({ onClick }: Props) {
  return (
    <div className="comment-write-btn" onClick={onClick}>
      <img src={vows} />
      <span>작성</span>
    </div>
  )
}
