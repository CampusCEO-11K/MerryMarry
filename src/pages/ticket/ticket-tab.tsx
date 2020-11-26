import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { listTicketRequest } from 'src/features/ticket/list-ticket';
import { Ticket } from 'src/models';
import { getNameFromMarriage } from 'src/utils';
import TabBarLayout from '../layouts/tab-bar-layout';
import './ticket-tab.scss';

function MainTicket({ ticket }: { ticket: Ticket }) {
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

export default function TicketPage() {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets);

  useEffect(() => {
    dispatch(listTicketRequest());
  }, [dispatch]);

  const mainTicket = tickets.filter(v => !v.isUsed)[0];

  return (
    <TabBarLayout>
      <div className="ticket-tab">
        <div className="main-ticket-container">
          {mainTicket && <MainTicket ticket={mainTicket} />}
        </div>
        <div className="used-ticket-container">
          <div className="used-ticket">사용 완료</div>
          <div className="used-ticket">사용 완료</div>
          <div className="used-ticket">사용 완료</div>
        </div>
      </div>
    </TabBarLayout>
  )
}
