import {type DeepPartial} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider'
import {getLoginPassword} from './getLoginPassword'

describe('getLoginPassword', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            loginForm: {
                password: '123',
            },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
