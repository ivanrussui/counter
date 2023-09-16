import React from 'react';
import {SuperButton} from './SuperButton';
import {Settings} from './Settings';

type PropsType = {
    nameSet: string
    setToLocalStorageHandler: () => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const CounterSettings = ({startValue, nameSet, setToLocalStorageHandler, setStartValue, ...restProp}: PropsType) => {
    return (
        <div className={'CounterSettings'}>
            <Settings startValue={startValue} setStartValue={setStartValue}
                      maxValue={restProp.maxValue} setMaxValue={restProp.setMaxValue} />
            <div className={'Buttons'}>
                <SuperButton name={nameSet} callBack={setToLocalStorageHandler}/>
            </div>
        </div>
    );
}
