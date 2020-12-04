import React, { useCallback } from 'react';
import { Marriage } from 'src/models';
import './marriage-cell.scss';
import CommentWriteBtn from './comment-write-btn';
import { getNameFromMarriage } from 'src/utils';
import { useHistory } from 'react-router-dom';
import { guestbook_comment_write } from 'src/utils/routes';

interface Props {
  marriage: Marriage;
}

export default function MarriageCell({ marriage }: Props) {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(guestbook_comment_write(marriage.marriageId));
  }, [history, marriage.marriageId])

  return (
    <div className="marriage-cell">
      <div className="marriage-cell-inner">
        <span className="name">{getNameFromMarriage(marriage)}</span>
        <span className="location">{marriage.location}</span>
      </div>
      <CommentWriteBtn onClick={onClick}/>
    </div>
  )
}
