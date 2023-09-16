import React, {ChangeEvent} from 'react';

type PropsType = {
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const Settings = (props: PropsType) => {
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
        // console.log(e.currentTarget.value)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        // console.log(e.currentTarget.value)
    }

    return (
        <div className={'Settings'}>
            <div className={'Row'}>
                <span className={'Title'}>max value:</span>
                <input type="number" value={props.maxValue} onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={'Row'}>
                <span className={'Title'}>start value:</span>
                <input type="number" value={props.startValue} onChange={onChangeStartValueHandler}/>
            </div>
        </div>
    )
};
