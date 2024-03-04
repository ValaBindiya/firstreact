import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {

    const [name, setName] = useState('India');
    const [timeZone, setTimeZone] = useState('GMT+5:30');

    const changeCountry = () => {
        console.log("gjhjhk");

        setName('USA');
        setTimeZone('GMT-5:00')
    }

    return (
        <div>
            <h2>My Country name is : {name} </h2>
            <h2>Time zone is : {timeZone} </h2>

            <button onClick={changeCountry}>Change country</button>
        </div>
    );
}

// const CountryFun = () => {

//     const changeCity = [

//         setName('Surat'),
//         population('85 Lakhs')
//     ]

//     return (
//         <div>
//             <h1>Parent div</h1>
//             <CityFun changeCity={changeCity} />
//         </div>
//     )
// }

export default CountryFun;