import React, { useState } from 'react';

const TimerClock = () => {
    const [count,setCount] = useState(0);
    const flag = true;


    const handleClick = () =>{
        if (flag == true) {
            setInterval(() => {
                setCount((count) => count +0.001);
            },1)
        }
    }

    const handleStopClick = () =>{
        if (flag == false) {
            setInterval(() => {
                setCount((count) => count +0.001);
            },1)
        }
    }
    return (
        <div>
            <h3>{count}</h3>
            <div>
                <button className='rounded-lg' onClick={handleClick}>Start</button>
                <hr></hr>
                <button className='rounded-lg' onClick={handleStopClick}>Stop</button>
            </div>
        </div>
    );
};

export default TimerClock;