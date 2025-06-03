import React, { useState, useEffect } from 'react'

function example2() {
    const [time, settime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date().toLocaleTimeString());
        }, 1000);
        console.log('Time Getting Change');
        
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <p>time:{time} </p>
        </div>
    )
}

export default example2