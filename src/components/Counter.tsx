import React from 'react';
import { Monitor } from './Monitor';
import { Buttons } from './Buttons';

type PropsType = {
  count: number
  incrementCount: () => void
  resetCount: () => void
  nameInc: string
  nameReset: string
}

export const Counter = (props: PropsType) => {
  return (
      <div className={'Counter'}>
        <Monitor count={props.count} />
        <Buttons incrementCount={props.incrementCount}
                 resetCount={props.resetCount}
                 nameInc={props.nameInc}
                 nameReset={props.nameReset}
                 count={props.count}
        />
      </div>
  );
}

