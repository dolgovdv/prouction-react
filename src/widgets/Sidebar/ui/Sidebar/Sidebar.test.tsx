import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from 'widgets/Sidebar'
import {ComponentRender} from 'shared/config/tests/ComponentRender/ComponentRender'

describe('Sidebar', function () {
    test('first test', () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('first test', () => {
        ComponentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
