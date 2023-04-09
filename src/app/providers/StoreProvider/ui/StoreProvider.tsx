import {type ReactElement, type ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from 'app/providers/StoreProvider'
import {type StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {type DeepPartial} from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}
export const StoreProvider = ({children, initialState}: StoreProviderProps): ReactElement => {
    const store = createReduxStore(initialState as StateSchema)
    return <Provider store={store}>{children}</Provider>
}
