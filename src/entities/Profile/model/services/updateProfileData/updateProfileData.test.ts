import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {updateProfileData} from 'entities/Profile'
import {ValidateProfileError} from 'entities/Profile/model/types/profile'

describe('updateProfileData', () => {
    const data = {
        username: 'admin',
        city: 'Moscow',
        age: 33,
        country: Country.Russia,
        lastname: 'Улби',
        first: 'Тимур',
        currency: Currency.RUB,
    }
    test('update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})
        thunk.api.put.mockReturnValue(Promise.resolve({data}))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})

        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {form: {...data, lastname: ''}},
        })
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
