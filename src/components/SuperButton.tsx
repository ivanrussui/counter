type PropsType = {
  callBack: () => void
  name: string
  disabled?: boolean
}

export const SuperButton = ({
                              callBack, name,
                              disabled, ...props
                            }: PropsType) => {
  return (
      <button disabled={disabled} className={'Button'} onClick={callBack}>{name}</button>
  )
}