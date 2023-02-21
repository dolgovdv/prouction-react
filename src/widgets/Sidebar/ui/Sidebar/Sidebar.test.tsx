import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslation } from 'shared/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', function () {
  test('first test', () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('first test', () => {
    renderWithTranslation(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
