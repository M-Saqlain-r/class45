import React, { useState, useEffect } from 'react'

function example2() {
    const [count, setcount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setcount(prevcount => prevcount + 1);
        }, 1000);
    }, [])
    return (
        <div>
            <p>Count:{count} </p>
        </div>
    )
}

export default example2