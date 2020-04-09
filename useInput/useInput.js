import React, { useState } from 'react';
import './styles.css';

const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validate === 'function') {
      willUpdate = validate(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
export default function App() {
  const maxLen = (value) => value.length < 10;
  //const maxLen=(value)=>!value.includes("@");
  const name = useInput('Mr', maxLen);
  //console.log(name);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="name" {...name} />
    </div>
  );
}
