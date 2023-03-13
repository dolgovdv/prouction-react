import {type StateSchema} from 'app/providers/StoreProvider'
import {type LoginSchema} from 'features/AuthByUsername'

export const getLoginState = (state: StateSchema): LoginSchema => state.loginForm
