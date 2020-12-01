import React from 'react';
import { TabBar, TopBar } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import './main-layout.scss';

interface Props extends React.ComponentProps<typeof TopBar> {
  children?: React.ReactNode;
  currentTab?: TabBarTab;
}

export default function MainLayout(props: Props) {
  const { children, currentTab, ...topBarProps } = props;

  return (
    <div className="main-layout">
      <TopBar {...topBarProps} />
      <div className="content-layout">
        {props.children}
      </div>
      {(props.currentTab !== undefined) && <TabBar current={props.currentTab} />}
    </div>
  )
}
