import {type Dispatch} from '@reduxjs/toolkit'
import axios from 'axios'
import {loginByUsername} from './loginByUsername'
import {type StateSchema} from 'app/providers/StoreProvider'
import {userActions} from 'entities/User'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
    let dispatch: Dispatch
    let stateSchema: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        stateSchema = jest.fn()
    })
    test('success login', async () => {
        const userValue = {username: 'test', id: '1'}
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
        const action = loginByUsername({username: 'test', password: '123'})
        const result = await action(dispatch, stateSchema, undefined)

        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
        const action = loginByUsername({username: 'test', password: '123'})
        const result = await action(dispatch, stateSchema, undefined)

        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('error')
    })
})
