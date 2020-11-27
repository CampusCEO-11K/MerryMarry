import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataEntry } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import { listGuestbookRequest } from 'src/features/guestbook/list-guestbook';
import { GuestbookForUser } from 'src/models';
import { RootState } from 'src/store';
import { dateToString } from 'src/utils';
import MainLayout from '../layouts/main-layout';
import './data-tab.scss';

export default function DataPage() {
  const dispatch = useDispatch();
  const guestbooks = useSelector((state: RootState) => state.guestbooks);

  useEffect(() => {
    dispatch(listGuestbookRequest());
  }, [dispatch]);

  const dataEntries = useMemo(() => {
    const map = new Map<string, GuestbookForUser[]>();
    guestbooks.forEach((g) => {
      const dateStr = dateToString(new Date(g.date));
      if (map.get(dateStr)) {
        map.get(dateStr)?.push(g);
      } else {
        map.set(dateStr, [g]);
      }
    });

    return Array.from(map.entries()).map(([key, value]) => (
      <DataEntry key={key} guestbooks={value} />
    ))
  }, [guestbooks])

  return (
    <MainLayout title="데이터 정리" currentTab={TabBarTab.data}>
      <div className="data-tab">
        {dataEntries}
      </div>
    </MainLayout>
  )
}
