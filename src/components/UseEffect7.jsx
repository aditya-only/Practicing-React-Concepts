import React from 'react'
import { useState, useEffect } from 'react'
import { renderToStaticMarkup } from 'react-dom/server.edge';


const UseEffect7 = () => {
    const [isOnline, setIsOnline]  = useState(true);


    useEffect(() => {

        const handleOnline = () => setIsOnline(true)    
        const handleOffline = () => setIsOnline(false)

        // listen for browser network events
        // this line runs ONCE
        // but it tells the BROWSER to watch forever
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        //cleanup function 
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    
    }, [])

  return <section>
    {isOnline ? <p>yes</p> : <p>no</p>}
  </section>
}

export default UseEffect7