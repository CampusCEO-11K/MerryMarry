import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TabBar, TopBar } from 'src/components';
import { Tab } from 'src/components/tab-bar';
import './tab-bar-layout.scss';

interface Props {
  children?: React.ReactNode;
}

export default function TabBarLayout(props: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  const currentTab: TabBar.Tab = useMemo(() => {
    return Object.values(Tab)
      .find((v) => pathname.startsWith(v.route))!.en
  }, [pathname]);

  return (
    <div className="tab-bar-layout">
      <TopBar title={Tab[currentTab].kr} />
      <div className="content-layout">
        {props.children}
      </div>
      <TabBar current={currentTab} />
    </div>
  )
}
