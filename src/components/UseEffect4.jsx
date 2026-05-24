import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect4 = () => {

    const [userId, setUserId] = useState(1);

    const [user, setUser] = useState('')

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data));

    }, [userId])

  return <section>

    {user && <p>{user.name}</p>}
    <p>{userId}</p>
    <button onClick={() => setUserId(prevId => prevId + 1)}>
        Next User
    </button>
  </section>
}

export default UseEffect4