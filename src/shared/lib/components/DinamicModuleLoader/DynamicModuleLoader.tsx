import {type ReactElement, useEffect} from 'react'
import {useDispatch, useStore} from 'react-redux'
import {type ReduxStoreWithManager} from 'app/providers/StoreProvider'
import {type StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema'
import {type Reducer} from '@reduxjs/toolkit'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersEntryList = [StateSchemaKey, Reducer]
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
        Object.entries(reducers).forEach(([name, reducer]: ReducersEntryList) => {
            store.reducerManager.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersEntryList) => {
                    store.reducerManager.remove(name)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return <>{children}</>
}
