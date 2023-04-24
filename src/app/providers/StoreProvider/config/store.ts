import {
    type AnyAction,
    configureStore,
    type EnhancedStore,
    type MiddlewareArray,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import {type ThunkMiddleware} from 'redux-thunk'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {$api} from 'shared/api/api'
import {type To} from 'history'
import {type NavigateOptions} from 'react-router'
import {type CombinedState, type Reducer} from 'redux'
import {type StateSchema, type ThunkExtraArg} from './StateSchema'
import {createReducerManager} from './reducerManager'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
): EnhancedStore<
    CombinedState<StateSchema>,
    AnyAction,
    MiddlewareArray<[ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ThunkExtraArg>]>
> {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
