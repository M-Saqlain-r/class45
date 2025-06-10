import React from 'react'

function Footer(props) {
    return (
        <div className='border-t-1 mt-6 w-full flex relative justify-between border-t-gray-400' >
            <div className={`border-1 rounded-xl ${props.w1} w-[120px] h-[40px] flex justify-center items-center mt-4`}>{props.img} {props.part1}</div>
            <div className='flex justify-center items-center '>
                <div className='flex absolute top-6 right-25'>
                    {props.dot}
                    {props.dot1}
                    {props.dot2}
                </div>
                <button className={`bg-purple-600 ${props.w2} ${props.button} rounded-xl w-[80px] cursor-pointer text-white h-[40px] flex justify-center items-center mt-4`}>{props.part2}</button>
            </div>
        </div>
    )
}

export default Footer