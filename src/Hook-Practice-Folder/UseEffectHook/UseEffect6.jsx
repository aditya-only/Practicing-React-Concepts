import React from 'react'
import { useState, useEffect } from 'react'
// Example 3 — Save to LocalStorage Automatically
const UseEffect6 = () => {

    const [note, setNote] = useState(() => {
        // Lazy initilizer: This function will run only once when the component first appears
        return localStorage.getItem("myNote" || "" ) 
    })

    // const initialstate = localStorage.getItem("myNote" || " ")
    
    // const [note, setNote] = useState(initialstate)

    useEffect(() => {

        localStorage.setItem("myNote", note)
                            //key      value 

    }, [note])


  return <section>
        <h2>My Note</h2>
        <input type="text"
                value={note} 
                onChange={(e) => setNote(e.target.value)}
                placeholder='Write SOmething'
              />
        <p>Saved Automaticallly</p>
  </section>
}

export default UseEffect6