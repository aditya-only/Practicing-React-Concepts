import React from 'react'
import { useState, useRef } from 'react'

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0)
  const timerRef = useRef(null) // Stores the TimerID

    const handleStart = () => {
      if(timerRef.current !== null){ // Checks wheather Timer is already Running
        alert("Timer is already Running")
        return;
      }
      console.log("Timer Started")
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1)        
      }, 1000);
      
    }
    console.log(`id is ${timerRef.current}`) // useRef persists the ID


    const handleStop = () => {
      clearInterval(timerRef.current)
      timerRef.current = null; // reset the value of ref
      console.log("Timer Stoped")
    }

    const handleReset = () => {
      setSeconds(0)
      console.log("Timer has been reset")
    }

  return <section>
    <p>{seconds}</p>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>

  </section>
}

export default StopWatch