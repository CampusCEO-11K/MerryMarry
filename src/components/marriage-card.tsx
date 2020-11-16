import React from 'react'
import { Marriage } from 'src/models'

interface Props {
  marriage: Marriage;
}

export default function MarriageCard({ marriage }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">예비부부</h5>
        <p className="card-text">{marriage.male.name}❤️ {marriage.lady.name}</p>
        <p className="card-text">{marriage.location}</p>
      </div>
    </div>
  )
}
