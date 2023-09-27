import React from 'react'
import {Link } from 'react-router-dom'

function Page2() {
  return (
    <div className='p2-container'>
      <div className='textarea'>
        <div className='num'>02. </div>
        <div className='qurry'>나의 성별은?</div>
      </div>

      <div className='radioButtonStyle'>
          <label className='radioStyle'>
            <input type="radio" name="test"/>
            <span>여성</span>
          </label>

          <label className='radioStyle'>
          <input type="radio" name="test" />
          <span>남성</span>
          </label>

          <label className='radioStyle'>
          <input type="radio" name="test" />
          <span>비공개</span>
          </label>

      </div>
<div className='pageNumber'>2 / 10</div>

<Link to="/" className='pre'>이전페이지</Link>
<Link to="/page3" className='Next'>다음페이지</Link>
    </div>
  )
}

export default Page2