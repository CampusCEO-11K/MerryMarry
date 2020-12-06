import React from 'react'
import { TabBarTab } from 'src/components/tab-bar';
import { image1 } from 'src/svgs';
import MainLayout from '../layouts/main-layout';

export default function DataStatisticsPage() {
  const style = {
    width: '100%'
  }

  return (
    <MainLayout title="통계" onBack={true} currentTab={TabBarTab.data}>
      <div className="data-statistics-page">
        <img src={image1} style={style} />
      </div>
    </MainLayout>
  )
}
