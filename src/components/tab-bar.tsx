import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from 'src/utils/routes';
import './tab-bar.scss';
import * as svgs from 'src/svgs';

export enum TabBarTab {
  guestbook,
  ticket,
  data,
  community,
  my
}

const Tabs = [
  {
    en: TabBarTab.guestbook,
    route: routes.guestbook,
    on: svgs.penOn,
    off: svgs.penOff,
    kr: '방명록',
  },
  {
    en: TabBarTab.ticket,
    route: routes.ticket,
    on: svgs.ticketOn,
    off: svgs.ticketOff,
    kr: '모바일 식권',
  },
  {
    en: TabBarTab.data,
    route: routes.data,
    on: svgs.notesOn,
    off: svgs.notesOff,
    kr: '데이터 관리',
  },
  {
    en: TabBarTab.community,
    route: routes.community,
    on: svgs.friendsOn,
    off: svgs.friendsOff,
    kr: '커뮤니티',
  },
  {
    en: TabBarTab.my,
    route: routes.my,
    on: svgs.profileOn,
    off: svgs.profileOff,
    kr: 'MY',
  },
];

type Props = {
  current: TabBarTab;
}

export function TabBar(props: Props) {
  const { current } = props;

  const tabs = Tabs.map(({ en, kr, route, on, off }) => (
    <Link
      to={route}
      key={en}
      className={classnames({ selected: current === en }, 'tab-bar-item')}
    >
      <div className="tab-bar-icon">
        <img src={(current === en) ? on : off} />
      </div>
      <span className="tab-bar-title">{kr}</span>
    </Link>
  ));

  return (
    <div className="tab-bar">
      {tabs}
    </div>
  )

}