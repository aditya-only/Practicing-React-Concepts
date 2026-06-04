import React, { use } from 'react'
import { useState, useRef, useEffect } from 'react'


const FocusInput = () => {
    const inputRef = useRef()

    useEffect(() => { // Automatically Foucs on input when the component render
        inputRef.current.focus()
        console.log("input focused through useEffect hook")
    }, [])

 
    const handleClick = () => {
        inputRef.current.blur()
    }

  return <section>
    <input type="email" ref={inputRef} placeholder="Enter Your Email Address"/>
    <button onClick={handleClick}>Remove Focus</button>
  </section>
}

export default FocusInput