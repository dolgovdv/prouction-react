import {getProfileForm} from './getProfileForm'
import {type StateSchema} from 'app/providers/StoreProvider'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

describe('getProfileForm', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            city: 'Moscow',
            age: 33,
            country: Country.Russia,
            lastname: 'Улби',
            first: 'Тимур',
            currency: Currency.RUB,
        }
        const state: DeepPartial<StateSchema> = {profile: {form}}
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work as empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
