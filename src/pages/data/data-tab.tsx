import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataEntry, RatioDiv } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import { listGuestbookRequest } from 'src/features/guestbook/list-guestbook';
import { GuestbookForUser } from 'src/models';
import { RootState } from 'src/store';
import { calendar, data, search } from 'src/svgs';
import { dateToString } from 'src/utils';
import * as routes from 'src/utils/routes';
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

  const leftBtns = useMemo(() => (
    <>
      <RatioDiv style={{ marginLeft: '12%' }} widthRatio={0.8} onClick={() => alert('준비중입니다.')}>
        <img src={data} />
      </RatioDiv>
      <RatioDiv widthRatio={0.8} onClick={() => alert('준비중입니다.')}>
        <img src={search} />
      </RatioDiv>
    </>
  ), []);

  const rightBtns = useMemo(() => (
    <>
      <RatioDiv>
        <Link to={routes.data_calendar}><img src={calendar} /></Link>
      </RatioDiv>
    </>
  ), []);

  return (
    <MainLayout title="데이터 관리" currentTab={TabBarTab.data} leftBtns={leftBtns} rightBtns={rightBtns}>
      <div className="data-tab">
        {dataEntries}
      </div>
    </MainLayout>
  )
}
