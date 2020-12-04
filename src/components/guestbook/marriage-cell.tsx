import React from 'react';
import { Marriage } from 'src/models';
import './marriage-cell.scss';
import CommentWriteBtn from './comment-write-btn';
import { getNameFromMarriage } from 'src/utils';

interface Props {
  marriage: Marriage;
}

export default function MarriageCell({ marriage }: Props) {
  return (
    <div className="marriage-cell">
      <div className="marriage-cell-inner">
        <span className="name">{getNameFromMarriage(marriage)}</span>
        <span className="location">{marriage.location}</span>
      </div>
      <CommentWriteBtn />
    </div>
  )
}
