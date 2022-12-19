import React, { useEffect, useRef } from 'react';
import './style.css';

export const Lyrics = ({ lines, currentLineIndex }) => {
  const lineRef = useRef();

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [currentLineIndex]);
  return (
    <div className="lyrics">
      {lines.map((line, index) => {
        if (currentLineIndex === index) {
          return (
            <p key={index} className="current-line" ref={lineRef}>
              {line.text}
            </p>
          );
        }
        return <p key={index}>{line.text}</p>;
      })}
    </div>
  );
};
