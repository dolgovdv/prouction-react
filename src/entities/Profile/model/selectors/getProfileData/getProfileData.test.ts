import {type StateSchema} from 'app/providers/StoreProvider'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import {getProfileData} from './getProfileData'

describe('GetProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            city: 'Moscow',
            age: 33,
            country: Country.Russia,
            lastname: 'Улби',
            first: 'Тимур',
            currency: Currency.RUB,
        }
        const state: DeepPartial<StateSchema> = {profile: {data}}
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
