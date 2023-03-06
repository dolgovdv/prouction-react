import {configureStore, type ReducersMapObject, type Store} from '@reduxjs/toolkit'
import {type StateSchema} from './StateSchema'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'

export function createReduxStore(initialState?: StateSchema): Store {
    const rootReducer: ReducersMapObject<StateSchema> = {counter: counterReducer, user: userReducer}
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
