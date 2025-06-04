import React from 'react'

function Header(props) {
    return (
        <div className='flex gap-10 p-3'>
            <div className="flex flex-col gap-4">
                <div className="text-5xl font-semibold">${props.credit} </div>
                <div className="ext-gray-400">Circulation on Debit</div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-5xl font-semibold">${props.debit} </div>
                <div className="text-gray-400">Circulation on Debit</div>
            </div>
        </div>
    )
}

export default Header