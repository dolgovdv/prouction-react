import {type StateSchema} from 'app/providers/StoreProvider'
import {getProfileIsLoading} from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
    test('profile loading true', () => {
        const state: DeepPartial<StateSchema> = {profile: {isLoading: true}}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })
    test('profile loading false', () => {
        const state: DeepPartial<StateSchema> = {profile: {isLoading: false}}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
    })
})
