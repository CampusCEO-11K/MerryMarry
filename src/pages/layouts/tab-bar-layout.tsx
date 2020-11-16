import { PageHeader } from 'antd';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TabBar } from 'src/components';
import { Tab } from 'src/components/tab-bar';

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
    <>
      <PageHeader title={Tab[currentTab].kr} />
      <div className="content-layout">
        {props.children}
      </div>
      <TabBar current={currentTab} />
    </>
  )
}
