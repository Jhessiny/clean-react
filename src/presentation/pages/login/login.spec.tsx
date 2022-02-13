/* eslint-env jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './login'

describe('Initial login state', () => {
  it('should not render spinner', () => {
    render(<Login/>)
    const spinner = screen.queryByTestId('spinner')
    expect(spinner).toBeNull()
  })

  it('should not render form-error', () => {
    render(<Login/>)
    const formStatus = screen.queryByTestId('form-error')
    expect(formStatus).toBeNull()
  })

  it('should have submit button disabled', () => {
    render(<Login/>)
    const submitButton = screen.getByRole('button', { name: /entrar/i }) as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
