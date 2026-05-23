import { useState, useEffect, use } from 'react'

const UseEffect2 = () => {

    const [user, setUser ] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => {
            setUser(data)
            setLoading(false)
        })
    }, [])


  return <section>
    {loading && <p>Loading...</p>}
    <h2>Hello {user.name}!</h2>
  </section>
}

export default UseEffect2