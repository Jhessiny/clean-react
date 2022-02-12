import React, { useContext } from 'react'
import Spinner from '../spinner/spinner'
import styles from './form-status-styles.scss'
import Context from '@/presentation/context/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
        <div className={styles.errorWrap} >
          {isLoading && <Spinner className={styles.spinner}/>}
          {errorMessage && <span data-testid="form-error" className={styles.error}>{errorMessage}</span>}
        </div>
  )
}

export default FormStatus
