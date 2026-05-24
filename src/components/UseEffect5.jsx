import React from 'react'
import { useState, useEffect } from 'react'


const UseEffect5 = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        if(!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((prevSec => prevSec + 1))
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [isRunning])

  return <section>

    
        seconds: {seconds}
    
    <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}>
        Reset
      </button>
  </section>
}

export default UseEffect5