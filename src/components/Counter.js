import React, { useState } from "react";
// import React from 'react';

function Counter(props) {

    const [counter, setCounter] = useState(0);


    const handleClickPlus = () => {
        setCounter(counter + 1);
    };

    const handleClickMinus = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(0)
    }

    return (

        <>
            <h1>Counter</h1>
            <button onClick={handleClickPlus} disabled={counter < 5 ? false : true}> +</button>
            {counter}
            <button onClick={handleClickMinus} disabled={counter > 0 ? false : true}>-</button>

            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default Counter;