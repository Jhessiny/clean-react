import React from 'react'
import styles from './input-styles.scss'
// import Context from '@/presentation/context/form/form-context'

type Props = {
  errorTitle: string
  type: string
  name: string
  placeholder: string
}

const Input: React.FC<Props> = ({ errorTitle, ...rest }: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return errorTitle
  }

  return (
    <div className={styles.inputWrap}>
      <input {...rest} readOnly onFocus={enableInput}/>
      <span title={getTitle()} className={styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
