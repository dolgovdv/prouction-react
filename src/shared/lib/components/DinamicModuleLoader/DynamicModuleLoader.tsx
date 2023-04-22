import {type ReactElement, useEffect} from 'react'
import {useDispatch, useStore} from 'react-redux'
import {type ReduxStoreWithManager} from 'app/providers/StoreProvider'
import {type StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema'
import {type Reducer} from '@reduxjs/toolkit'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    children: ReactElement
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount = false,
}: DynamicModuleLoaderProps): JSX.Element => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            //
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
        // TODO: убрать зависимости
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

    return <>{children}</>
}
