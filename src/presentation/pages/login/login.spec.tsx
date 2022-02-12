/* eslint-env jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './login'

describe('Name of the group', () => {
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
})
