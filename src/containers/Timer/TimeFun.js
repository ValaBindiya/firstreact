import React, { useState } from 'react';
import { useEffect } from 'react';

function TimeFun(props) {

    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date())
    }

    useEffect(() => {
        // alert("I was run.")
    })

    useEffect(() => {
        // alert("I am running.")
        const timeRef = setInterval(tick, 1000)
    })

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default TimeFun;