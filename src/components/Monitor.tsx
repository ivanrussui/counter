type PropsType = {
  count: number
}

export const Monitor = ({ count }: PropsType) => {
  const countCondition = count === 10
  const classColors = `${countCondition ? "CounterValue + RedCounterValue" : 'CounterValue'}`

  return (
      <div className={'Monitor'}>
        <div className={classColors}>{count}</div>
      </div>
  )
}