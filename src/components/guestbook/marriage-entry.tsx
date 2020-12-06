import React, { useMemo } from 'react';
import { Marriage } from 'src/models';
import { dateToString } from 'src/utils';
import MarriageCell from './marriage-cell';
import './marriage-entry.scss';

interface Props {
  marriages: Marriage[];
}

export default function DataEntry({ marriages }: Props) {
  const dateString = dateToString(new Date(marriages[0].date!));

  const elements = useMemo(() => marriages.map((marriage) => (
    <MarriageCell key={marriage.marriageId} marriage={marriage} />
  )), [marriages])

  return (
    <div className="marriage-entry">
      <span className="title">{dateString}</span>
      {elements}
    </div>
  )
}
