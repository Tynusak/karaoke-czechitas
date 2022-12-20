import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Player } from './Player';
import { Lyrics } from './Lyrics';
import { lines } from './lyrics-lines';

const App = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const handleTimeUpdate = (currentTime) => {
    const index = lines.findLastIndex((line) => line.time < currentTime);
    if (index !== currentLineIndex) {
      setCurrentLineIndex(index);
    }
  };
  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player
        src="fools-garden-lemon-tree.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <Lyrics lines={lines} currentLineIndex={currentLineIndex} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
