import React from 'react';
import style from '../Card/Card.module.css'

function Card({ data }) {
    return (

        <div className={style.disp}>
            <>

                <h1>{data.name}</h1>
                <h1>{data.expiry}</h1>
                <h1>{data.price}</h1>
            </>


        </div>
    );
}

export default Card;