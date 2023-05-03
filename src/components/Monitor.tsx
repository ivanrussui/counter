type PropsType = {
  count: number
}

export const Monitor = ({ count, ...props }: PropsType) => {
  const countCondition = count === 5
  const classColors = `
  ${countCondition ? "Counter + RedCounter" : 'Counter'}`
  return (
      <div className={'Monitor'}>
        <div className={classColors}>{count}</div>
      </div>
  )
}