import React from 'react'
import { useState, useEffect } from 'react'

const InfiniteScrollUE = () => {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setPosts((prev) => [...prev, ...data])
        setLoading(false)
      })
  }, [page])

  useEffect(() => {

    // ✅ This function checks if page is tall enough to scroll
    const isPageScrollable = () => {
      return document.documentElement.scrollHeight > window.innerHeight
    }

    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100

      if (isAtBottom && !loading) {
        setPage((prev) => prev + 1)
      }
    }

    // ✅ After loading finishes, check if page is scrollable
    // If NOT scrollable → automatically load next page
    if (!loading && !isPageScrollable()) {
      setPage((prev) => prev + 1)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [loading]) // runs every time loading changes

  return (
    <section style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>My Feed</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: "15px",
            margin: "10px 0",
            border: "1px solid #eee",
            borderRadius: "8px"
          }}
        >
          <h4>{post.title}</h4>
        </div>
      ))}

      {loading && <p style={{ textAlign: "center" }}>Loading more... ⏳</p>}

    </section>
  )
}

export default InfiniteScrollUE