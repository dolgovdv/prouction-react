import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchProfileData} from 'entities/Profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

const data = {
    username: 'admin',
    city: 'Moscow',
    age: 33,
    country: Country.Russia,
    lastname: 'Улби',
    first: 'Тимур',
    currency: Currency.RUB,
}

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({data}))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
