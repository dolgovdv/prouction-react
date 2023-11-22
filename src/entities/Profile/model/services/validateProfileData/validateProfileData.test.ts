import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import {validateProfileData} from './validateProfileData'
import {ValidateProfileError} from '../../types/profile'

const data = {
    username: 'admin',
    city: 'Moscow',
    age: 33,
    country: Country.Russia,
    lastname: 'Улби',
    first: 'Тимур',
    currency: Currency.RUB,
}

describe('validateProfileData', () => {
    test('success', () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })
    test('whithout firstname and lastname', () => {
        const result = validateProfileData({...data, first: '', lastname: ''})
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect age', () => {
        const result = validateProfileData({...data, age: undefined})
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('not data', () => {
        const result = validateProfileData({})
        console.log(result)
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USERNAME,
        ])
    })
})
