import React from 'react';
import { TabBarTab } from 'src/components/tab-bar';
import MainLayout from '../layouts/main-layout';

export default function DataPage() {
  return (
    <MainLayout title="데이터 정리" currentTab={TabBarTab.data} />
  )
}
