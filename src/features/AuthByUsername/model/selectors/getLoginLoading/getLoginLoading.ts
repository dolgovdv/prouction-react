import {type StateSchema} from 'app/providers/StoreProvider'

export const getLoginLoading = (state: StateSchema): boolean => state?.loginForm?.isLoading ?? false
