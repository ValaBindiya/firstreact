import React, { useState } from 'react';

function CityFun(props) {

    const [name, setCity] = useState('Surat');
    const [population, setPopulation] = useState('89.30 Lakhs');

    const changeCity = () => {
        setCity('Ahemdabad');
        setPopulation('8.85 Lakhs')
    }

    return (
        <>
            <h2>My city name is : {name}</h2>
            <h3>{name} population is : {population}</h3>

            <button onClick={changeCity}>Change city</button>
        </>
    );
}

export default CityFun; 