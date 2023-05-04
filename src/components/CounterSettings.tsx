import React from 'react';
import { SuperButton } from './SuperButton';
import { Settings } from './Settings';

type PropsType = {
  // count: number
  // incrementCount: () => void
  // resetCount: () => void
  // nameInc: string
  nameSet: string
  setToLocalStorageHandler: () => void
  startValue: number
  setStartValue: (startValue: number) => void
}

export const CounterSettings = ({ startValue, nameSet, setToLocalStorageHandler,
                                  setStartValue }: PropsType) => {
  return (
      <div className={'CounterSettings'}>
        <Settings startValue={startValue}
                  setStartValue={setStartValue} />
        <div className={'Buttons'}>
          <SuperButton name={nameSet}
                       callBack={setToLocalStorageHandler}
              // callBack={incrementCount}

          />
        </div>
      </div>
  );
}

