import {SuperButton} from './SuperButton';

type PropsType = {
    incrementCount: () => void
    resetCount: () => void
    nameInc: string
    nameReset: string
    count: number
    maxValue: number
    minValue: number
}

export const Buttons = ({incrementCount, resetCount, nameInc, nameReset, count, ...restProp}: PropsType) => {
    const maxCount = count === restProp.maxValue
    const minCount = count < restProp.minValue

    return (
        <div className={'Buttons'}>
            <SuperButton disabled={maxCount} callBack={incrementCount} name={nameInc}/>
            <SuperButton disabled={minCount} callBack={resetCount} name={nameReset}/>
        </div>
    )
}
