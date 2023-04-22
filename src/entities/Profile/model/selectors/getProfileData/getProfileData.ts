import {type StateSchema} from 'app/providers/StoreProvider'
import {type Profile} from 'entities/Profile'

export const getProfileData = (state: StateSchema): Profile | undefined => state.profile?.data
