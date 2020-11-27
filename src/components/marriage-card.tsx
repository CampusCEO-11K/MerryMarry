import React from 'react'
import { Marriage } from 'src/models'
import { getNameFromMarriage } from 'src/utils'
import './marriage-card.scss';

interface Props {
  marriage: Marriage;
}

export default function MarriageCard({ marriage }: Props) {
  return (
    <div className="marriage-card">
      <div className="card-body">
        <h5 className="card-title">예비부부</h5>
        <p className="card-text">{getNameFromMarriage(marriage)}</p>
        <p className="card-text">{marriage.location}</p>
      </div>
    </div>
  )
}
