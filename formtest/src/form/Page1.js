import React from 'react'
import '../formCss/Page1.css'
import {Link } from 'react-router-dom'



function Page1() {

  return (
    <div className='p1-container'>
      <div className='textarea'>
        <div className='num'>01. </div>
        <span className='qurry'>나의 나이는?</span>
      </div>
{/* 텍스트 부분 */}

{/* 라디오 선택 */}
      <div className='radioButtonStyle'>

        <label className='radioStyle'>
          <input type="radio" name="gender" />
          <span>10대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio" name="gender" />
          <span>20대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio" name="gender" />
          <span>30대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio" name="gender" />
          <span>40대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio" name="gender" />
          <span>50대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio" name="gender" />
          <span>60대 이상</span>
        </label>


{/* 버튼 부분 */}
      </div>
      <div className='pageNumber'>1 / 10</div>
      <div className='next'><Link to="page2">다음페이지</Link></div>
    </div>
  )
}

export default Page1