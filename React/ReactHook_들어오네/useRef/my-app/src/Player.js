import React, { useRef } from "react";
import music from "./assets/music.mp3";

export default function Player() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <>
      <audio src={music} ref={audioRef} controls></audio>
      <button onClick={handlePlay}>재생</button>
      <button onClick={handlePause}>중지</button>
    </>
  );
}
