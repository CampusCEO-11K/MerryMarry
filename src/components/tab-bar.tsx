import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from 'src/utils/routes';
import './tab-bar.scss';

export const Tab = {
  guestbook: { en: 'guestbook', kr: '방명록', route: routes.guestbook },
  mealTicket: { en: 'mealTicket', kr: '식권', route: routes.mealTicket },
  dataManage: { en: 'dataManage', kr: '데이터 관리', route: routes.dataManage },
  community: { en: 'community', kr: '커뮤니티', route: routes.community },
  my: { en: 'my', kr: 'MY', route: routes.my },
} as const;

type Props = {
  current: TabBar.Tab;
}

export function TabBar(props: Props) {
  const { current } = props;

  const tabs = Object.values(Tab).map(({ en, kr, route }) => (
    <div
      key={en}
      className={classnames({ selected: current.toString() === en }, 'tab-bar-item')}
    >
      <Link to={route}>{kr}</Link>
    </div>
  ));

  return (
    <div className="tab-bar">
      {tabs}
    </div>
  )
}

export declare namespace TabBar {
  export type Tab = keyof typeof Tab;
}