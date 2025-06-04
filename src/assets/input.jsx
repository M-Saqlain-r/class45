import React from 'react'
import { CiSearch } from "react-icons/ci";
function input({ Change }) {
    return (
        <div className='relative m-1'>
            <input type="text" onChange={Change} placeholder='Search' className='border-1 w-[300px] p-2 pl-8 rounded-full relative' />
            <CiSearch className=' absolute top-[28%] text-xl left-[3%]' />
        </div>
    )
}

export default input