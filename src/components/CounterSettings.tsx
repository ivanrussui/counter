import React, {useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {Settings} from './Settings';

type PropsType = {
    nameSet: string
    setToLocalStorageHandler: () => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    isButtonDisabled: boolean
    setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

export const CounterSettings = ({startValue, nameSet, setToLocalStorageHandler, setStartValue, ...restProp}: PropsType) => {
    const disableSet = startValue >= restProp.maxValue || startValue < 0



    // useEffect(() => {
    //     // Проверяем условия для дизейбла кнопки
    //     const shouldDisableButton = startValue < 0 || startValue >= restProp.maxValue;
    //     setIsButtonDisabled(shouldDisableButton);
    // }, [startValue, restProp.maxValue]);

    return (
        <div className={'CounterSettings'}>
            <Settings startValue={startValue} setStartValue={setStartValue}
                      maxValue={restProp.maxValue} setMaxValue={restProp.setMaxValue} disableSet={disableSet} isButtonDisabled={restProp.isButtonDisabled} setIsButtonDisabled={restProp.setIsButtonDisabled} />
            <div className={'Buttons'}>
                <SuperButton disabled={restProp.isButtonDisabled} name={nameSet} callBack={setToLocalStorageHandler}/>
            </div>
        </div>
    );
}
