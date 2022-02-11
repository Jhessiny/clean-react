import styles from './login-styles.scss'
import React from 'react'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header/>
      <form className={styles.form} action="">

        <h2>Login</h2>

        <Input type="email" name='email' placeholder='Digite seu email'/>
        <Input type="password" name='password' placeholder='Digite sua senha'/>

        <button type="submit">Entrar</button>

        <span className={styles.link}>Criar conta</span>
       <FormStatus/>

      </form>
      <Footer/>
    </div>
  )
}

export default Login
