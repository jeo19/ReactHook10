import React, { useState, useEffect, useRef } from 'react';
const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isfull) => {
    if (callback && typeof callback === 'function') {
      callback(isfull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCallback(true);
    }
  };
  const exitFullscreen = () => {
    document.exitFullscreen();
    runCallback(false);
  };
  return { element, triggerFull, exitFullscreen };
};

export default function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? 'we are full' : 'we are small');
  };
  const { element, triggerFull, exitFullscreen } = useFullscreen(onFullScreen);
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <div ref={element}>
        <img src="https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <button onClick={exitFullscreen}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
