import React from 'react'
import { vows } from 'src/svgs'
import './comment-write-btn.scss';

export default function CommentWriteBtn() {
  return (
    <div className="comment-write-btn">
      <img src={vows} />
      <span>작성</span>
    </div>
  )
}
