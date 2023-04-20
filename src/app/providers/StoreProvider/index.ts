import {StoreProvider} from './ui/StoreProvider'
import {createReduxStore, type AppDispatch} from './config/store'
import {type StateSchema, type ReduxStoreWithManager, type ThunkConfig} from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type AppDispatch,
    type ThunkConfig,
}
