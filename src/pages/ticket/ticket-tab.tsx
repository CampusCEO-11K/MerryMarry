import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlipCard } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import { listTicketRequest } from 'src/features/ticket/list-ticket';
import { RootState } from 'src/store';
import MainLayout from '../layouts/main-layout';
import './ticket-tab.scss';


export default function TicketPage() {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets);

  useEffect(() => {
    dispatch(listTicketRequest());
  }, [dispatch]);

  const mainTicket = tickets.filter(v => !v.isUsed)[0];

  return (
    <MainLayout title="모바일 식권" currentTab={TabBarTab.ticket}>
      <div className="ticket-tab">
        <div className="main-ticket-container">
          {mainTicket && <FlipCard ticket={mainTicket} />}
        </div>
        <div className="used-ticket-container">
          <div className="used-ticket">사용 완료</div>
          <div className="used-ticket">사용 완료</div>
          <div className="used-ticket">사용 완료</div>
        </div>
      </div>
    </MainLayout>
  )
}
