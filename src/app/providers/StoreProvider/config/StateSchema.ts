import {type CounterSchema} from 'entities/Counter'
import {type UserSchema} from 'entities/User'
import {type LoginSchema} from 'features/AuthByUsername'
import {
    type AnyAction,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import {type CombinedState} from 'redux'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    /**
     * Асинхронные редюсеры
     */
    loginForm?: LoginSchema
}
export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReduceMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
