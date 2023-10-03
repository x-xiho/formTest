import React, { useState } from 'react';

const Page4 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheck = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      localStorage.setItem('gender', selectedOption);
      // 이후 서버로 데이터를 보낼 수 있습니다.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>성별을 선택해주세요:</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="남성"
          checked={selectedOption === '남성'}
          onChange={handleCheck}
        />
        남성
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="여성"
          checked={selectedOption === '여성'}
          onChange={handleCheck}
        />
        여성
      </label>
      {/* 더 많은 라디오 버튼을 추가하세요 */}
      <button type="submit" disabled={selectedOption === null}>
        다음으로
      </button>
    </form>
  );
};

export default Page4;
