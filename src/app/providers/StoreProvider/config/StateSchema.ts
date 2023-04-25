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
import {type ProfileSchema} from 'entities/Profile'
import {type AxiosInstance} from 'axios'
import {type NavigateOptions, type To} from 'react-router'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
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

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
