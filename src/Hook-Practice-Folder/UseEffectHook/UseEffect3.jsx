import { useState, useEffect } from "react";
// tracking mouse movement
const UseEffect3 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // ✅ Set up the side effect
    console.log("🖱️ mouse moved!"); // runs every move
    window.addEventListener("mousemove", handleMouseMove);

    // ✅ Cleanup: remove the listener when component unmounts
    return () => {
        console.log("🧹 cleanup ran!"); // only runs on unmount
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // ← set up once, clean up once

  return (
    <p>
      Mouse: {position.x}, {position.y}
    </p>
  );
}
export default UseEffect3;