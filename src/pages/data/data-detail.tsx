import React from 'react'
import MainLayout from '../layouts/main-layout';
import './data-detail.scss';

export default function DataDetailPage() {
  return (
    <MainLayout title="상세정보" onBack={true}>
      <div className="data-detail-page">
        <table>
          <tbody>
            <tr>
              <td>일시</td>
              <td>2021.01.23 오후 5시</td>
            </tr>
            <tr>
              <td>예비부부</td>
              <td>이몽룡 ❤️ 성춘향</td>
            </tr>
            <tr>
              <td>납부한 축의금</td>
              <td>₩50,000</td>
            </tr>
            <tr>
              <td>식권</td>
              <td>4장</td>
            </tr>
            <tr>
              <td>방명록</td>
              <td>행복하게 오래오래 사세요!</td>
            </tr>
            <tr>
              <td>예식장</td>
              <td>
                <div className="place">
                  <p>그랜드예식장</p>
                  <img src="https://cphoto.asiae.co.kr/listimglink/1/2013021816571922691_1.jpg" />
                </div>
              </td>
            </tr>
            <tr>
              <td>문의하기</td>
            </tr>
          </tbody>
        </table>
        <button className="btn login-btn">수정하기</button>
      </div>
    </MainLayout>
  )
}
