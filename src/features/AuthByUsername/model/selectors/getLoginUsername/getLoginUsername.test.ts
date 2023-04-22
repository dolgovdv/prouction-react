import {type StateSchema} from 'app/providers/StoreProvider'
import {getLoginUsername} from './getLoginUsername'

describe('getLoginUsername', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'user',
            },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('user')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
