import {counterReducer, type CounterSchema} from 'entities/Counter'
import {counterActions} from 'entities/Counter/model/slice/counterSlice'

describe('Slice', () => {
    test('decrement test', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9})
    })

    test('increment test', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 11})
    })

    test('empty state test', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
    })
})
