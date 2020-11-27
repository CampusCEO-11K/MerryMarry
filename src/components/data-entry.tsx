import React, { useMemo } from 'react'
import { GuestbookForUser } from 'src/models'
import { dateToString } from 'src/utils';
import { DataCell } from '.';
import './data-entry.scss';

interface Props {
  guestbooks: GuestbookForUser[];
}

export default function DataEntry({ guestbooks }: Props) {
  const dateString = dateToString(new Date(guestbooks[0].date));

  const elements = useMemo(() => guestbooks.map((guestbook) => (
    <DataCell key={guestbook.guestbookId} guestbook={guestbook} />
  )), [guestbooks])

  return (
    <div className="data-entry">
      <span className="title">{dateString}</span>
      {elements}
    </div>
  )
}
