import React from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Page7 from './pages/page7'
import { RxCross1 } from "react-icons/rx";
function App() {
  return (
    <div className='bg-[#dbdbdb] h-screen flex justify-center items-center'>
      <div className="bg-gradient-to-b from-[#f3effe] relative border-white border-4 rounded-2xl  to-white min-w-[350px] max-w-2xl p-4">
        <div className='w-[30px] h-[30px] rounded-2xl bg-white absolute -right-2 -top-2 flex justify-center items-center'>
          <RxCross1 className='cursor-pointer' />
        </div>     
           <Page1 />
      </div>
    </div>
  )
}

export default App;