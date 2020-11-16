import querystring from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootActions, RootState } from 'src/features';
import MarriageEntryPage from './marriage-1-entry';
import MarriageWritePage from './marriage-2-write';
import MarriagePaymentPage from './marriage-3-payment';
import MarriageLoginPage from './marriage-4-login';
import MarriageSuccessPage from './marriage-5-success';

export default function GuestbookEntryPage() {
  const dispatch = useDispatch();
  const { marriage, step, person } = useSelector((state: RootState) => state.marriage);

  const parsed = querystring.parse(window.location.search, { parseBooleans: true, parseNumbers: true });
  const marriageId = parsed.marriageId as number;
  const personId = parsed.personId as number;
  const isOnline = parsed.isOnline as boolean;

  useEffect(() => {
    dispatch(RootActions.marriage.marriageInit({ marriageId, personId }));
  }, [dispatch, marriageId, personId]);

  switch(step) {
    case 'entry': return (
      <MarriageEntryPage person={person} marriage={marriage} isOnline={isOnline} />
    )
    case 'guestbook': return (
      <MarriageWritePage />
    )
    case 'payment': return (
      <MarriagePaymentPage />
    )
    case 'login': return (
      <MarriageLoginPage />
    )
    case 'success': return (
      <MarriageSuccessPage person={person} marriage={marriage} />
    )
    default: return <div />
  }
}
