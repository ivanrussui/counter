import React from 'react';
import { SuperButton } from './SuperButton';

type PropsType = {
  // count: number
  // incrementCount: () => void
  // resetCount: () => void
  // nameInc: string
  nameSet: string
  setToLocalStorageHandler: () => void
}

export const CounterSettings = (props: PropsType) => {
  return (
      <div className={'CounterSettings'}>
        {/*<Monitor count={props.count} />*/}
        <SuperButton name={props.nameSet}
                     callBack={props.setToLocalStorageHandler}
                     // callBack={incrementCount}

        />
      </div>
  );
}

