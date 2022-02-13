import styles from './login-styles.scss'
import React, { useState } from 'react'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={styles.login}>
      <LoginHeader/>
     <Context.Provider value={state}>
        <form className={styles.form} action="">

          <h2>Login</h2>

          <Input errorTitle={'Campo obrigatório'} type="email" name='email' placeholder='Digite seu email'/>
          <Input errorTitle={'Campo obrigatório'} type="password" name='password' placeholder='Digite sua senha'/>

          <button disabled type="submit">Entrar</button>

          <span className={styles.link}>Criar conta</span>
          <FormStatus/>

        </form>
     </Context.Provider>
      <Footer/>
    </div>
  )
}

export default Login
