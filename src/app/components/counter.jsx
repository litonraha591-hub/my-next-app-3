
'use client';
import React, { useState } from 'react';

const Counter = () => {
const [count, setCount]=useState(0);
const handlerIncrease =(()=>{
console.log('increase btn clicked');
setCount(count+1)
})

    console.log('counter page rendered')
    return (
        <div>
            <h2 className="text-4xl font-bold mb-4">Counter:{count}</h2>
            <button onClick={handlerIncrease}
             className='bg-blue-500 px-2 border-none rounded-[5px]'>Increase!</button>
        </div>
    );
};

export default Counter;