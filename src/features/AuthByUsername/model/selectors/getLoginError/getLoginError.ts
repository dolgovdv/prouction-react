import {type StateSchema} from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getLoginError = (state: StateSchema) => state?.loginForm?.error
