import {type StateSchema} from 'app/providers/StoreProvider'
import {ValidateProfileError} from 'entities/Profile/model/types/profile'
import {getProfileValidateErrors} from 'entities/Profile'

describe('getProfileValidateErrors', () => {
    test('validate', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ])
    })

    test('validate', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
