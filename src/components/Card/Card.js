import React from 'react';

function Card({ data }) {
    return (
        
        <div id='disp'>
            <>
                
                <h1>{data.name}</h1>
                <h1>{data.expiry}</h1>
                <h1>{data.price}</h1>
            </>


        </div>
    );
}

export default Card;