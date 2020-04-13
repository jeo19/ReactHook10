import React, { useState, useEffect } from 'react';

export default function App() {
  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector('title');
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);
  return <div className="App">Hi</div>;
}
