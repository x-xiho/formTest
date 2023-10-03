import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page1 from './form/Page1'
import Page2 from './form/Page2'
import Page3 from './form/Page3'
import Page4 from './form/Page4'

function App() {
  return (


    <div className='container'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>} />
          <Route path="page2" element={<Page2/>} />
          <Route path="page3" element={<Page3/>} />
          <Route path="page4" element={<Page4/>} />
        </Routes>
      </BrowserRouter>

    </div>



  );
}

export default App;
