import {type StateSchema} from 'app/providers/StoreProvider'
import {type User} from 'entities/User'

export const getUserAuthData = (state: StateSchema): User | undefined => {
    // TODO: попраить тип чтоб небыло undefined
    return state.user.authData
}
