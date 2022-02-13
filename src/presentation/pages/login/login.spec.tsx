/* eslint-env jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './login'

describe('Initial login state', () => {
  beforeEach(() => {
    render(<Login/>)
  })

  it('should not render spinner', () => {
    const spinner = screen.queryByTestId('spinner')
    expect(spinner).toBeNull()
  })

  it('should not render form-error', () => {
    const formStatus = screen.queryByTestId('form-error')
    expect(formStatus).toBeNull()
  })

  it('should have submit button disabled', () => {
    const submitButton = screen.getByRole('button', { name: /entrar/i }) as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  it('should have email status with correct title', () => {
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i)
    const emailStatus = emailInput.nextSibling as HTMLElement
    expect(emailStatus.title).toBe('Campo obrigatório')
  })

  it('should have password status with correct title', () => {
    const passwordInput = screen.getByPlaceholderText(/Digite sua senha/i)
    const passwordStatus = passwordInput.nextSibling as HTMLElement
    expect(passwordStatus.title).toBe('Campo obrigatório')
  })
})
