import React, { useEffect, useState } from 'react'
import Ucbutton from './Ucbutton'
import Ucimg from '../pictures/uc.jpg'
function Ucbox() {
    const [count, setCount] = useState(() => {
        const ucStorage = parseInt(localStorage.getItem('ucStorage'));
        return ucStorage ? ucStorage : 0
    });
    useEffect(() => {
        localStorage.setItem('ucStorage', count)
    })
    return (
        <div className='p-4 flex gap-2 items-center select-none'>
            <img src={Ucimg} width={30} />
            {count}
            <Ucbutton onClick={() => setCount(count + 1)}>+</Ucbutton>
        </div>
    )
}

export default Ucbox