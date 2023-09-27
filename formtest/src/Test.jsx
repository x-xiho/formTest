import React, { useState } from 'react';

const Test = () => {
  return (
    <>
<label className="radioLabel"style={{cursor:"pointer", fontSize:"16px"}}>
오잉<input className="radio" type="radio" name="test" style={{display:"none"}}/>
</label>

<label className="radioLabel"style={{cursor:"pointer", fontSize:"16px"}}>
에잉<input className="radio" type="radio" name="test" style={{display:"none"}}/>
</label>

</>

  );
}

export default Test;
