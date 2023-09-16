type PropsType = {
    count: number
    maxValue: number
}

export const Monitor = ({count, maxValue}: PropsType) => {
    const countCondition = count >= maxValue
    const classColors = `${countCondition ? "CounterValue + RedCounterValue" : 'CounterValue'}`

    return (
        <div className={'Monitor'}>
            <div className={classColors}>{count}</div>
        </div>
    )
}