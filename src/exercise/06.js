// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputName = useRef();
  const [inputValue, setInputValue] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputName.current.value);
  }

  const handleOnChange = ({target: {value}}) => {
    setInputValue(value.toLowerCase());
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="inputUserName">Username:</label>
        <input id="inputUserName" ref={inputName} type="text" onChange={handleOnChange} value={inputValue} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
