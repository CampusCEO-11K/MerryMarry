import React, { useState } from 'react';
import './flip-card.scss';
import classname from 'classnames';
import { ticket } from 'src/svgs';
import { Ticket } from 'src/models';
import { getNameFromMarriage } from 'src/utils';

interface Props {
  ticket: Ticket;
}

function MainTicket({ ticket }: Props) {
  return (
    <div className="main-ticket">
      <span className="ticket-id">{ticket.ticketId.toString().padStart(10, '0')}</span>
      <span className="marriage-name">{getNameFromMarriage(ticket.marriage)}</span>
      <div className="description">
        {ticket.marriage.location}
      </div>
      <div className="date-container">
        <div className="issue-date">
          <span>발급날짜</span>
          <br />
          <span>2020.11.10</span>
        </div>
        <div className="expire-date">
          <span>만료날짜</span>
          <br />
          <span>2020.11.11</span>
        </div>
      </div>
    </div>
  )
}

export default function FlipCard(props: Props) {
  const [isFlip, setFlip] = useState(false);

  const flipCardClass = classname('flip-card', { flipped: isFlip });

  return (
    <div className={flipCardClass} onClick={() => setFlip(v => !v)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={ticket} />
        </div>
        <div className="flip-card-back">
          <MainTicket ticket={props.ticket} />
        </div>
      </div>
    </div>
  )
}
