import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { GuestbookForUser } from 'src/models'
import { getNameFromMarriage } from 'src/utils';
import { data_detail } from 'src/utils/routes';
import './data-cell.scss';

interface Props {
  guestbook: GuestbookForUser;
}

export default function DataCell(props: Props) {
  const history = useHistory();
  const { guestbook } = props;
  const { marriage, transaction } = guestbook;

  const amountStr = transaction ? `축의금 ${transaction.amount}` : '';

  const onClick = useCallback(
    () => {
      history.push(data_detail)
    },
    [history],
  )

  return (
    <div className="data-cell" onClick={onClick}>
      <div className="data-cell-inner">
        <span className="name">{getNameFromMarriage(guestbook.marriage)}</span>
        <span className="amount">{amountStr}</span>
        <span className="location">{marriage.location}</span>
        <span className="ticket">식권 1장</span>
      </div>
    </div>
  )
}
