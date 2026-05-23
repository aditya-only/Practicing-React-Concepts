import { useState, useEffect } from 'react'


const UseEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`

  })

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <section>
    <h1>{count}</h1>
    <button onClick={handleClick}>Add</button>
  </section>
}

export default UseEffect