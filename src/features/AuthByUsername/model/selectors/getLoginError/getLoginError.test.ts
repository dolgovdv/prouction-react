import {type StateSchema} from 'app/providers/StoreProvider'
import {getLoginError} from './getLoginError'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            // TODO:TS2739: Type '{ error: string; }' is missing the following properties from type 'LoginSchema': username, password,
            loginForm: {
                error: 'error',
            },
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})
