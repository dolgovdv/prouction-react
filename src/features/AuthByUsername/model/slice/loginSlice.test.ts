import {type LoginSchema} from 'features/AuthByUsername'
import {type DeepPartial} from '@reduxjs/toolkit'
import {loginActions, loginReducer} from './loginSlice'

describe('loginSlice test', function () {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: 'user'}
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toStrictEqual({
            username: '123',
        })
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: '111'}
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('222'))).toStrictEqual({
            password: '222',
        })
    })
})
