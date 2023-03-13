import {configureStore, type ReducersMapObject, type Store} from '@reduxjs/toolkit'
import {type StateSchema} from './StateSchema'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {loginReducer} from 'features/AuthByUsername'

export function createReduxStore(initialState?: StateSchema): Store {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
