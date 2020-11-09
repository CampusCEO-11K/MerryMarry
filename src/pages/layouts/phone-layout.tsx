import React from 'react'
import { PhoneBottomSVG, PhoneSVG, PhoneTopSVG } from 'src/components'
import './phone-layout.scss';

interface Props {
  children: React.ReactNode;
}

export default function PhoneLayout({ children }: Props) {
  return (
    <div id="phone-layout">
      <div id="phone-svg-container">
        <PhoneSVG />
      </div>
      <div id="phone-inside-layout">
        <div id="phone-top-svg-container">
          <PhoneTopSVG />
        </div>
        <div id="phone-content-container">
          {children}
        </div>
        <div id="phone-bottom-svg-container">
          <PhoneBottomSVG />
        </div>
      </div>
    </div>
  )
}
