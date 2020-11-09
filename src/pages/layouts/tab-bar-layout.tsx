import { Button, PageHeader } from 'antd';
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
      .find((v) => v.route === pathname)!.en
  }, [pathname]);

  const headerExtra = <Button disabled>축의금 충전하기</Button>;

  return (
    <>
      <PageHeader title={Tab[currentTab].kr} extra={headerExtra} />
      <div className="content-layout">
        {props.children}
      </div>
      <TabBar current={currentTab} />
    </>
  )
}
