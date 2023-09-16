import React from 'react';
import {Monitor} from './Monitor';
import {Buttons} from './Buttons';

type PropsType = {
    count: number
    incrementCount: () => void
    resetCount: () => void
    nameInc: string
    nameReset: string
    startValue: number
    maxValue: number
    minValue: number
}

export const Counter = (props: PropsType) => {
    return (
        <div className={'Counter'}>
            <Monitor count={props.count} maxValue={props.maxValue}/>
            <Buttons incrementCount={props.incrementCount}
                     resetCount={props.resetCount}
                     nameInc={props.nameInc}
                     nameReset={props.nameReset}
                     count={props.count}
                     startValue={props.startValue}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
            />
        </div>
    );
}

