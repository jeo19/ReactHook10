import React, { useState, useEffect, useRef } from 'react';
import useAxios from './useAxios';
export default function App() {
  const { loading, data, error, refetch } = useAxios({
    //Note: The site URL will Change frequently
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(
    `Loading:${loading}\nError:${error}\nDate:${JSON.stringify(data)}`,
  );
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && 'Loading'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
