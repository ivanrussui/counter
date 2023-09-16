import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {CounterSettings} from './components/CounterSettings';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [minValue, setMinValue] = useState(startValue)
    const [count, setCount] = useState(startValue)

    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])

    const nameInc = 'INC'
    const nameReset = 'RESET'
    const nameSet = 'SET'

    const incrementCount = () => {
        count < maxValue && setCount(count + 1)
    }

    const resetCount = () => setCount(startValue)

    const setToLocalStorageHandler = () => {
        localStorage.setItem('key', JSON.stringify(startValue))
        setCount(startValue)
    }

    const getFromLocalStorageHandler = () => {
        let countAsString = localStorage.getItem('key')
        if (countAsString) {
            let newCount = JSON.parse(countAsString)
            setCount(newCount)
            setStartValue(newCount)
        }
    }

    return (
        <div className="App">
            <div className="Container">
                <CounterSettings nameSet={nameSet}
                                 setToLocalStorageHandler={setToLocalStorageHandler}
                                 startValue={startValue}
                                 setStartValue={setStartValue}
                                 maxValue={maxValue}
                                 setMaxValue={setMaxValue}
                />
                <Counter count={count}
                         startValue={startValue}
                         incrementCount={incrementCount}
                         resetCount={resetCount}
                         nameInc={nameInc}
                         nameReset={nameReset}
                         maxValue={maxValue}
                         minValue={minValue}
                />
            </div>
        </div>
    );
}

export default App;
