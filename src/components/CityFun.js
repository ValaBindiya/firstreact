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

            {
                props.changeCity === 'India' ? <h2>My city name is : {'Surat'}</h2> : <h2>My city name is : {'New york'}</h2>
            }

            {
                props.changeCity === 'India' ? <h2>Surat population is : {'89.30 Lakhs'}</h2> : <h2>New york population is : {'8.85 Lakhs'}</h2>
            }

            {/* <h3>{name} population is : {population}</h3> */}
            {/* <h2>My city name is : {name}</h2> */}


            <button onClick={changeCity}>Change city</button>



        </>
    );
}

export default CityFun; 
