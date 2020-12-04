import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MarriageEntry } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import { listMarriageRequest } from 'src/features/marriage/list-marriage';
import { Marriage } from 'src/models';
import { RootState } from 'src/store';
import { dateToString } from 'src/utils';
import MainLayout from '../layouts/main-layout';
import './guestbook-comment.scss';

export default function GuestbookTabPage() {
  const dispatch = useDispatch();
  const marriages = useSelector((state: RootState) => state.marriages);
  const name: string | undefined = useSelector((state: RootState) => state.auth.user?.name);

  useEffect(() => {
    dispatch(listMarriageRequest());
  }, [dispatch])

  const marriageEntries = useMemo(() => {
    const map = new Map<string, Marriage[]>();
    marriages
      .filter(m => m.date)
      .forEach((g) => {
        const dateStr = dateToString(new Date(g.date!));
        if (map.get(dateStr)) {
          map.get(dateStr)?.push(g);
        } else {
          map.set(dateStr, [g]);
        }
      });

    return Array.from(map.entries()).map(([key, value]) => (
      <MarriageEntry key={key} marriages={value} />
    ))
  }, [marriages])

  return (
    <MainLayout title="방명록 남기기" onBack={true} currentTab={TabBarTab.guestbook}>
      <div id="guestbook-comment">
        <div id="msg1">{name}님의 일정 속 결혼식입니다.<br />축하 메시지를 작성해보세요!</div>
      </div>
      {marriageEntries}
    </MainLayout>
  )
}
