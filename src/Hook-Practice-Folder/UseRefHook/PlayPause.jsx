import { useRef } from "react";

const PlayPause = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play(); // plays the video
  };

  const handlePause = () => {
    videoRef.current.pause(); // pauses the video
  };

  return (
    <div>
      <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" width="300" />

      <button onClick={handlePlay}>▶ Play</button>
      <button onClick={handlePause}>⏸ Pause</button>
    </div>
  );
}

export default PlayPause