import React from 'react'
import { useState, useRef } from 'react'

const UseRefFirst = () => {
    // const [message, setMessage] = useState('')

    // const clickCount = useRef(0) //Ref Object

    // const handleClick = () => {
    //     clickCount.current = clickCount.current + 1
    //     console.log(`Count increased with ${clickCount.current}`)

    //     if(clickCount.current === 5){
    //         setMessage('You clicked 5 times')
    //     }
    // }

    const [count, setCount] = useState(0)
    const [display, setDisplay] = useState('')

    const handleClick = () => {
        const newCount = count + 1
        setCount(newCount)

        console.log(`you have clicked ${count} times`)
        if(newCount === 5){
            setDisplay(`You have clicked ${count} times`)
        }
    }
  return <section>
        
        <button onClick={handleClick}>Click</button>
        <p>{display}</p>

  </section>
}

export default UseRefFirst