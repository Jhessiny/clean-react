import Spinner from '@/presentation/components/spinner/spinner'
import styles from './login-styles.scss'
import React from 'react'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header/>
      <form className={styles.form} action="">

        <h2>Login</h2>
        <div className={styles.inputWrap}>
          <input type="email" name='email' placeholder='Digite seu email' />
          <span className={styles.status}>🔴</span>
        </div>

        <div className={styles.inputWrap}>
        <input type="password" name='password' placeholder='Digite sua senha' />
          <span className={styles.status}>🔴</span>
        </div>
        <button type="submit">Entrar</button>

        <span className={styles.link}>Criar conta</span>
        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner}/>
          <span className={styles.error}>Erro</span>
        </div>

      </form>
      <Footer/>
    </div>
  )
}

export default Login
