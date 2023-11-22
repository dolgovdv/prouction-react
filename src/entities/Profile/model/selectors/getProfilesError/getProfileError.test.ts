import {type StateSchema} from 'app/providers/StoreProvider'
import {getProfileError} from 'entities/Profile'

describe('GetProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {profile: {error: 'testError'}}
        expect(getProfileError(state as StateSchema)).toEqual('testError')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
