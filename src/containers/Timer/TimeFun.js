import React, { useState } from 'react';
import { useEffect } from 'react';

function TimeFun(props) {

    // 1.constructor
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date())
    }

    useEffect(() => {

        // 3.componentDidMount
        // 4.componentDidUpdate
        const timeRef = setInterval(tick, 1000)

        // 5.componentWillUnmount
        return () => {
            clearInterval(timeRef)
        }
    }, []);

    // 2.render
    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default TimeFun;