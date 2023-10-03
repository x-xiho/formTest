import React, { useState } from 'react';
import image from '../house.jpg';
import '../formCss/Page3.css';
import { Link } from 'react-router-dom';

function Page3() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);


  const handleCheckboxChange = (id) => {
    if (id === 't1') {
      setIsChecked1(!isChecked1);
    } else if (id === 't2') {
      setIsChecked2(!isChecked2);
    } else if (id === 't3') {
      setIsChecked3(!isChecked3);
    }
  }

  return (
    <div className='p3-container'>
      <div className='textarea'>
        <div className='num'>03. </div>
        <div className='qurry'>평소 나의 취미는?</div>
      </div>

      <div>
        <label className={`checkStyle ${isChecked1 ? 'checked' : ''}`}>
          <input type="checkbox" id="t1" onChange={() => handleCheckboxChange('t1')} />
          <div className='img'>
            <img src={image} alt='house' style={{ filter: isChecked1 ? 'grayscale(0)' : 'grayscale(1)' }} />
          </div>
          <div className='fav'>산책</div>
        </label>

        <label className={`checkStyle ${isChecked2 ? 'checked' : ''}`}>
          <input type="checkbox" id="t2" onChange={() => handleCheckboxChange('t2')} />
          <div className='img'>
            <img src={image} alt='house' style={{ filter: isChecked2 ? 'grayscale(0)' : 'grayscale(1)' }} />
          </div>
          <div className='fav'>운동</div>
        </label>

        <label className={`checkStyle ${isChecked3 ? 'checked' : ''}`}>
          <input type="checkbox" id="t3" onChange={() => handleCheckboxChange('t3')} />
          <div className='img'>
            <img src={image} alt='house' style={{ filter: isChecked3 ? 'grayscale(0)' : 'grayscale(1)' }} />
          </div>
          <div className='fav'>연극 / 뮤지컬 관람</div>
        </label>
      </div>

      <div className='pageNumber'>3 / 10</div>
      <Link to="/page2" className='pre'>이전페이지</Link>
      <Link to="/page4" className='Next'>다음페이지</Link>
    </div>
  );
}

export default Page3;
