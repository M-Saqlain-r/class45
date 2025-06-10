import React from 'react'

function Button(props) {
    return (
        <button className='flex justify-center items-center border-gray-500 border-1 rounded-lg gap-3 h-[40px]'>
            {props.img}
            {props.text}
        </button>
    )
}

export default Button