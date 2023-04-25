import {type StateSchema} from 'app/providers/StoreProvider'

export const getProfileReadonly = (state: StateSchema): boolean => state.profile?.readonly ?? false
