import React from 'react'
import  { useRef } from 'react'

const ScrollToBottom = () => {
    const bottomRef = useRef(null)

    const handleScroll = () => {
        bottomRef.current.scrollIntoView({behavior: "smooth"})
    }

  return <section>
    <button onClick={handleScroll}>Scroll To Bottom</button>

    <div ref={bottomRef} 
         style={{marginTop: "1000px"}}>

            <h2>You are at bottom</h2>
    </div>
  </section>
}

export default ScrollToBottom