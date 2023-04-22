import {
    type AnyAction,
    combineReducers,
    type ReducersMapObject,
    type Reducer,
} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider'
import {
    type ReducerManager,
    type StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema'

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = {...initialReducers}

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []

    return {
        // TODO:unused
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = {...state}
                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                })
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (key == null || reducers[key] != null) {
                return
            }

            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (key == null || reducers[key] == null) {
                return
            }

            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        },
    }
}
