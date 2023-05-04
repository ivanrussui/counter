import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { CounterSettings } from './components/CounterSettings';

function App() {
  const [ count, setCount ] = useState(0)
  const [ storage, setStorage ] = useState(count)

  useEffect(() => {
    getFromLocalStorageHandler()
  }, [])

  useEffect(() => {
    setToLocalStorageHandler()
  }, [ storage ])

  const nameInc = 'INC'
  const nameReset = 'RESET'
  const nameSet = 'SET'

  const incrementCount = () => {
    count < 5 && setCount(count + 1)
    // count < 5 && setCount(count + 1)
  }

  const resetCount = () => setCount(0)


  const setToLocalStorageHandler = () => {
    localStorage.setItem('key', JSON.stringify(count))
    // localStorage.setItem('key + 1', JSON.stringify(count + 1))
  }

  const getFromLocalStorageHandler = () => {
    let countAsString = localStorage.getItem('key')
    if (countAsString) {
      let newCount = JSON.parse(countAsString)
      setCount(newCount)
      setStorage(newCount)
    }
  }

  // const clearLocalStorageHandler = () => {
  //   localStorage.clear()
  //   setCount(0)
  // }
  //
  // const removeItemLocalStorageHandler = () => {
  //   localStorage.removeItem('key + 1')
  // }

  return (
      <div className="App">
        <div className="Container">
          <CounterSettings nameSet={nameSet}
                           setToLocalStorageHandler={setToLocalStorageHandler}
          />
          <Counter count={count}
                   incrementCount={incrementCount}
                   resetCount={resetCount}
                   nameInc={nameInc}
                   nameReset={nameReset}
          />
          {/*<Monitor count={count} />*/}
          {/*<Buttons incrementCount={incrementCount}*/}
          {/*         resetCount={resetCount}*/}
          {/*         nameInc={nameInc}*/}
          {/*         nameReset={nameReset}*/}
          {/*         count={count}*/}
          {/*    // setToLocalStorageHandler={setToLocalStorageHandler}*/}
          {/*    // getFromLocalStorageHandler={getFromLocalStorageHandler}*/}
          {/*/>*/}
          {/*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
          {/*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
          {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
          {/*<button onClick={removeItemLocalStorageHandler}>removeItemLocalStorage</button>*/}
        </div>
      </div>
  );
}

export default App;
