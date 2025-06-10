import React from 'react'

function Header(props) {
    return (
        <div className={`flex ${props.gap} flex-col justify-center items-center`}>
            <div className="text-3xl font-semibold">{props.head1} </div>
            <div className="text-gray-600">{props.head2} </div>
        </div>
    )
}

export default Header