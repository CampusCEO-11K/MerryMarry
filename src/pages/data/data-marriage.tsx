import React from 'react'
import { TabBarTab } from 'src/components/tab-bar';
import { image2 } from 'src/svgs';
import MainLayout from '../layouts/main-layout';

export default function DataMarriagePage() {
  const style = {
    width: '100%'
  }

  return (
    <MainLayout title="예식장 정보" onBack={true} currentTab={TabBarTab.data}>
      <div className="data-marriage-page">
        <img src={image2} style={style} />
      </div>
    </MainLayout>
  )
}
