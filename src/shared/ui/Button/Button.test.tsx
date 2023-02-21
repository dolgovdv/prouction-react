import { render, screen } from '@testing-library/react'
import { Button, ThemeButtons } from './Button'

describe('Button', function () {
  test('first test', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('first theme', () => {
    render(<Button theme={ThemeButtons.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    // screen.debug()
  })
})
