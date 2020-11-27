import React from 'react';
import { TabBarTab } from 'src/components/tab-bar';
import MainLayout from '../layouts/main-layout';

export default function MyPage() {
  return (
    <MainLayout title="MY" currentTab={TabBarTab.my} />
  )
}
