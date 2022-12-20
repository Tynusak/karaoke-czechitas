import React, { useEffect, useRef, useState } from 'react';
import './style.css';

export const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (playing) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [playing]);
  const handlePlay = () => {
    setPlaying(!playing);
  };
  const handleTimeUpdate = (e) => {
    onTimeUpdate(e.target.currentTime);
  };
  return (
    <>
      <audio src={src} ref={ref} onTimeUpdate={handleTimeUpdate}></audio>
      <div className="player-controls">
        <button
          onClick={handlePlay}
          className={playing ? 'play-button pause' : 'play-button play'}
        ></button>
      </div>
    </>
  );
};
