import React from 'react'
import Button from './Button'

function Ucbutton({ children, onClick }) {
    return (
        <>
            <Button onClick={onClick} btnstyle={'bg-black text-white text-center text-4xl h-6 w-6 flex items-center justify-center relative cursor-pointer'}>
              <div className='absolute flex items-center leading-[15px] justify-center text-center'>
                {children}
              </div>
            </Button>
        </>
    )
}

export default Ucbutton;