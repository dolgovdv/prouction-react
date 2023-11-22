import {getProfileReadonly} from './getProfileReadonly'
import {type StateSchema} from 'app/providers/StoreProvider'

describe('getProfileReadOnnly', () => {
    test('readonly true', () => {
        const state: DeepPartial<StateSchema> = {profile: {readonly: true}}
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
    test('readonly false', () => {
        const state: DeepPartial<StateSchema> = {profile: {readonly: false}}
        expect(getProfileReadonly(state as StateSchema)).toEqual(false)
    })
})
