import React from 'react'

function input(props) {
    // console.log(props.keys);

    return (
        <div>

            <input autoFocus={props.keys == 1} placeholder={`${props.place}`} type="text" id={props.keys} onChange={props.onChnage} className={`${props.class}`} maxLength={props.length} />
        </div>
    )
}

export default input