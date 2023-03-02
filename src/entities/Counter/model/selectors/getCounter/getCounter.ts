import {type StateSchema} from 'app/providers/StoreProvider'
import {type CounterSchema} from 'entities/Counter'

export const getCounter = (state: StateSchema): CounterSchema => {
    return state.counter
}
