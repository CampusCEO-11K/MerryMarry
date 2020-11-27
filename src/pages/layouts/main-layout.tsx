import React from 'react';
import { TabBar, TopBar } from 'src/components';
import { TabBarTab } from 'src/components/tab-bar';
import './main-layout.scss';

interface Props extends React.ComponentProps<typeof TopBar> {
  children?: React.ReactNode;
  currentTab?: TabBarTab;
}

export default function MainLayout(props: Props) {
  return (
    <div className="main-layout">
      <TopBar title={props.title} onBack={props.onBack} />
      <div className="content-layout">
        {props.children}
      </div>
      {(props.currentTab !== undefined) && <TabBar current={props.currentTab} />}
    </div>
  )
}
