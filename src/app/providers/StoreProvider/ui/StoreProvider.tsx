import {type FC} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from 'app/providers/StoreProvider'
import {type StateSchema} from 'app/providers/StoreProvider/config/StateSchema'

interface StoreProviderProps {
    initialState?: StateSchema
}
export const StoreProvider: FC<StoreProviderProps> = ({children, initialState}) => {
    const store = createReduxStore(initialState)
    return <Provider store={store}>{children}</Provider>
}
