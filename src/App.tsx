import React, { useState } from 'react';
import './App.css';
import { Monitor } from './components/Monitor';
import { Buttons } from './components/Buttons';

function App() {
  const [ count, setCount ] = useState(0)

  const nameInc = 'INC'
  const nameReset = 'RESET'

  const incrementCount = () => count < 5 && setCount(count + 1)
  const resetCount = () => setCount(0)

  return (
      <div className="App">
        <Monitor count={count} />
        <Buttons incrementCount={incrementCount}
                 resetCount={resetCount}
                 nameInc={nameInc}
                 nameReset={nameReset}
                 count={count}
        />
      </div>
  );
}

export default App;
