import React, {ChangeEvent} from 'react';

type PropsType = {
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    disableSet?: boolean
    isButtonDisabled: boolean
    setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

export const Settings = (props: PropsType) => {
    const classColors = `${props.disableSet ? "InputValue + RedInputValue" : 'InputValue'}`

    // const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.setStartValue(Number(e.currentTarget.value))
    // }
    //
    // const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.setMaxValue(Number(e.currentTarget.value))
    // }

    // Обработчик изменения значения стартового значения
    const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
        props.setIsButtonDisabled(false)
        if (props.disableSet) {
            console.log('f')
            props.setIsButtonDisabled(true)
        }
        // props.disableSet = false
    };

    // Обработчик изменения значения максимального значения
    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        props.setIsButtonDisabled(false)
        if (props.disableSet) {
            console.log('d')
            props.setIsButtonDisabled(true)
        }
    };

    return (
        <div className={'Settings'}>
            <div className={'Row'}>
                <span className={'Title'}>max value:</span>
                <input className={classColors} type="number" value={props.maxValue} onChange={handleMaxValueChange}/>
            </div>
            <div className={'Row'}>
                <span className={'Title'}>start value:</span>
                <input className={classColors} type="number" value={props.startValue} onChange={handleStartValueChange}/>
            </div>
        </div>
    )
};
