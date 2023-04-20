import {type StateSchema} from 'app/providers/StoreProvider'

export const getProfileError = (state: StateSchema): string => state.profile?.error ?? ''
