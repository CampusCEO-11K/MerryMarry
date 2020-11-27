import React from 'react'
import { GuestbookForUser } from 'src/models'
import { getNameFromMarriage } from 'src/utils';
import './data-cell.scss';

interface Props {
  guestbook: GuestbookForUser;
}

export default function DataCell(props: Props) {
  const { guestbook } = props;
  const { marriage, transaction } = guestbook;

  const amountStr = transaction ? `축의금 ${transaction.amount}` : '';

  return (
    <div className="data-cell">
      <div className="data-cell-inner">
        <span className="name">{getNameFromMarriage(guestbook.marriage)}</span>
        <span className="amount">{amountStr}</span>
        <span className="location">{marriage.location}</span>
        <span className="ticket">식권 1장</span>
      </div>
    </div>
  )
}
