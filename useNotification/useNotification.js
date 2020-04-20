import React, { useState, useEffect, useRef } from 'react';
const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};
export default function App() {
  const triggerNotification = useNotification(
    "Why Notification doesn't it work?",
    { body: 'They are afflict me' },
  );
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <button onClick={triggerNotification}>Show Notification</button>
    </div>
  );
}
