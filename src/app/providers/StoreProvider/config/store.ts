import {configureStore, type Store} from '@reduxjs/toolkit'
import {type StateSchema} from './StateSchema'
import {counterReducer} from 'entities/Counter'

export function createReduxStore(initialState?: StateSchema): Store {
    return configureStore<StateSchema>({
        reducer: {counter: counterReducer},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
