import React, { useEffect, useRef, useState } from 'react';
import './style.css';

export const Player = ({ src }) => {
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
  return (
    <>
      <audio src={src} ref={ref}></audio>
      <div className="player-controls">
        <button
          onClick={handlePlay}
          className={playing ? 'play-button pause' : 'play-button play'}
        ></button>
      </div>
    </>
  );
};
