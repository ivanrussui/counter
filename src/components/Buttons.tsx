import { SuperButton } from './SuperButton';

type PropsType = {
  incrementCount: () => void
  resetCount: () => void
  nameInc: string
  nameReset: string
  count: number
}

export const Buttons = ({
                          incrementCount, resetCount,
                          nameInc, nameReset, count, ...props
                        }: PropsType) => {

  const maxCount = count === 5
  const minCount = count < 1

  return (
      <div className={'Buttons'}>
        <SuperButton disabled={maxCount} callBack={incrementCount} name={nameInc} />
        <SuperButton disabled={minCount} callBack={resetCount} name={nameReset} />
      </div>
  )
}
