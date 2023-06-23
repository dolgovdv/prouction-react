import {type StateSchema} from 'app/providers/StoreProvider'

export const getUserInited = (state: StateSchema): boolean => {
    return state.user._inited
}
