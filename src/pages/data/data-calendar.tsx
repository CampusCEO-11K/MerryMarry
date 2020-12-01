import classname from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RatioDiv } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import { listMarriageRequest } from 'src/features/marriage/list-marriage';
import { Marriage } from 'src/models';
import { RootState } from 'src/store';
import { data, list, search } from 'src/svgs';
import * as routes from 'src/utils/routes';
import MainLayout from '../layouts/main-layout';
import './data-calendar.scss';

interface CustomCalendarProps {
  year: number;
  month: number;
}

function CustomCalendar({ year, month }: CustomCalendarProps) {
  const history = useHistory();

  const thisMonthStart = new Date(year, month - 1);
  const nextMonthStart = new Date(year, month);

  const marriages = useSelector((state: RootState) => state.marriages);
  const marriageMap: any = {};
  marriages
    .filter(v => {
      if (v.date) {
        const dateObj = new Date(v.date);
        return thisMonthStart.getTime() <= dateObj.getTime() && dateObj.getTime() <= nextMonthStart.getTime();
      } else {
        return false;
      }
    })
    .forEach(v => {
      if (v.date) {
        const date = new Date(v.date).getDate();
        marriageMap[date] = v;
      }
    });

  const firstDay = (new Date(year, month - 1)).getDay();
  const daysInMonth = 32 - (new Date(year, month - 1, 32).getDate());

  const trs = [];

  let date = 1;
  for (let i = 0; date <= daysInMonth; i++) {
    const tds = [];

    for (let j = 0; j < 7; j++) {
      const className = classname({ red: j === 0 })

      if (i === 0 && j < firstDay) {
        tds.push(<td className={className} />)
      } else if (date > daysInMonth) {
        break;
      } else {
        const marriage: Marriage | undefined = marriageMap[date];

        const onClick = marriage && (() => history.push(routes.data_detail));

        tds.push(
          <td key={date} className={className}>
            <div onClick={onClick}>
              <span>{date}</span>
              <span>{marriage?.maleName}</span>
              <span>{marriage?.ladyName}</span>
            </div>
          </td>
        )
        date++;
      }
    }

    trs.push(<tr key={i}>{tds}</tr>)
  }

  return (
    <table>
      {trs}
    </table>
  )
}

export default function DataCalendarPage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    dispatch(listMarriageRequest());
  }, [dispatch])

  const leftBtns = useMemo(() => (
    <>
      <RatioDiv style={{ marginLeft: '12%' }} widthRatio={0.8}>
        <img src={data} />
      </RatioDiv>
      <RatioDiv widthRatio={0.8}>
        <img src={search} />
      </RatioDiv>
    </>
  ), []);

  const rightBtns = useMemo(() => (
    <>
      <RatioDiv>
        <Link to={routes.data}><img src={list} /></Link>
      </RatioDiv>
    </>
  ), []);

  const changeMonth = (delta: number) => () => {
    date.setMonth(date.getMonth() + delta);
    setDate(new Date(date));
  }

  return (
    <MainLayout title="데이터 관리" leftBtns={leftBtns} rightBtns={rightBtns} currentTab={TabBarTab.data}>
      <div className="data-calendar-page">
        <div className="bar">
          <i className="material-icons" onClick={changeMonth(-1)}>keyboard_arrow_left</i>
          <span>{date.getFullYear()} {date.toLocaleString('en', { month: 'long' })}</span>
          <i className="material-icons" onClick={changeMonth(1)}>keyboard_arrow_right</i>
        </div>
        <CustomCalendar year={date.getFullYear()} month={date.getMonth() + 1} />
      </div>
    </MainLayout>
  )
}
