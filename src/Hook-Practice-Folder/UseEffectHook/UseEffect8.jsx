import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect8 = () => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
        console.log("scrollY:", window.scrollY) // ← add this line

      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section>

      <p style={{ textAlign: "center", padding: "20px" }}>⬆ TOP</p>

      {/* ✅ Fix 1 — added lots of content so page becomes scrollable */}
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>Keep scrolling down... 👇</p>
        <p style={{ marginTop: "400px" }}>Almost there... 👇</p>
        <p style={{ marginTop: "400px" }}>You scrolled enough! 🎉</p>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",  // stays in same place while scrolling
            bottom: "30px",
            right: "30px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ⬆ Back to Top
        </button>
      )}

    </section>
  )
}

export default UseEffect8