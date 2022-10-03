import './App.css';
import { useState } from 'react';
import React from 'react';
import Counter from './componenets/counter';

function App() {
  const [isShown, setIsShown] = useState(false);
  const showhidden = () => {
    setIsShown((current) => !current);
  };
  return (
    <div className="App text-center mt-5">
      <button className="control__btn" onClick={showhidden}>
        Show hidden counter
      </button>
      {isShown ? <Counter /> : null}
    </div>
  );
}

export default App;
