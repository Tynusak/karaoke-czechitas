import React, { useEffect, useRef } from 'react';
import './style.css';

export const Lyrics = ({ lines, currentLineIndex }) => {
  const lineRef = useRef();
  useEffect(() => {}, [currentLineIndex]);
  return (
    <div className="lyrics">
      {lines.map((item, index) => (
        <p
          key={index}
          className={currentLineIndex === index ? 'current-line' : ''}
        >
          {item.text}
        </p>
      ))}
    </div>
  );
};
