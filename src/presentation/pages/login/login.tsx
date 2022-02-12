import styles from './login-styles.scss'
import React, { useState } from 'react'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({ isLoading: false, errorMessage: '' })

  return (
    <div className={styles.login}>
      <LoginHeader/>
     <Context.Provider value={state}>
        <form className={styles.form} action="">

          <h2>Login</h2>

          <Input type="email" name='email' placeholder='Digite seu email'/>
          <Input type="password" name='password' placeholder='Digite sua senha'/>

          <button type="submit">Entrar</button>

          <span className={styles.link}>Criar conta</span>
          <FormStatus/>

        </form>
     </Context.Provider>
      <Footer/>
    </div>
  )
}

export default Login
