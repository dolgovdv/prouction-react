import {ComponentRender} from 'shared/config/tests/СomponentRender/ComponentRender'
import {Counter} from './Counter'
import {screen} from '@testing-library/react'
import {userEvent} from '@storybook/testing-library'

describe('Counter', () => {
    test('base', () => {
        ComponentRender(<Counter />, {initialState: {counter: {value: 10}}})
        expect(screen.getByTestId('value-title')).toHaveTextContent('value =10')
    })

    test('increment', () => {
        ComponentRender(<Counter />, {initialState: {counter: {value: 10}}})
        userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('value =11')
    })

    test('decrement', () => {
        ComponentRender(<Counter />, {initialState: {counter: {value: 10}}})
        userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('value =9')
    })
})
