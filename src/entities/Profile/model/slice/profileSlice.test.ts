import {profileActions, profileReducer} from './profileSlice'
import {type ProfileSchema, ValidateProfileError} from '../types/profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import {updateProfileData} from 'entities/Profile'

const data = {
    username: 'admin',
    city: 'Moscow',
    age: 33,
    country: Country.Russia,
    lastname: 'Улби',
    first: 'Тимур',
    currency: Currency.RUB,
}

describe('profileReducer', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false}
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {data}
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        })
    })

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {form: {username: '111'}}
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({username: '222'}))
        ).toEqual({
            form: {username: '222'},
        })
    })
})

describe('profile extra reducer', () => {
    test('service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        })
    })

    test('service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.SERVER_ERROR],
        }
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))
        ).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        })
    })
})
